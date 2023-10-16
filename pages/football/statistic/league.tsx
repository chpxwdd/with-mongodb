
import * as React from 'react'
import {NextPage} from 'next'
import {getSession, useSession} from 'next-auth/react'
import RootLayout from '@/layouts/RootLayout'
import {ELeagueType, EViewStanding, IStorageCountry, IStorageLeague} from '@/models/mongo/storage.types'
import {Accordion, Badge, Button, ButtonGroup, ButtonToolbar, Col, Dropdown, DropdownButton, Form, ListGroup, Row} from 'react-bootstrap'
import Image from 'next/image'
import worldFlag from '@/image/world.svg'
import StatisticsLayout from '@/layouts/StatisticsLayout'
import {Response as IStandingResponse, Standing as IStanding} from '@/models/rapid-api/response/v3standings'
import {FlashMessageContext, IFlashMessage} from '@/context/FlashMessageContext'
import LeagueStanding from '@/components/football/LeagueStanding'
import CountryTitle from '@/components/common/CountryTitle'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDownload, faGear, faRefresh} from '@fortawesome/free-solid-svg-icons'
import {FOOTBALL_API_RPM} from '@/constants/rapid-api'
import {fetchStandings} from '@/lib/rapid-api/standings'

export async function getServerSideProps(context) {
	const session = await getSession({req: context.req})
	if (!session) return {redirect: {destination: '/auth/login', permanent: false}}
	return {props: {session}}
}

interface Props {}

interface IResponse {
	_id: string
	league: IStorageLeague
	country: IStorageCountry
}

const FootballStatisticsLeaguePage: NextPage<Props> = ({}) => {
	const [favoriteLeagues, setFavoriteLeagues] = React.useState<IResponse[]>()
	const [leaguesApiId, setLeaguesApiId] = React.useState<number[]>([])
	const [standings, setStandings] = React.useState<IStandingResponse[]>()
	const {update, data: session, status} = useSession()
	const {flashMessages, setFlashMessages} = React.useContext(FlashMessageContext)

	React.useEffect(() => {
		fetchStorageFavoritesLeagues()
	}, [])

	// React.useEffect(() => {console.log('leagues', favoriteLeagues)}, [favoriteLeagues])
	// React.useEffect(() => {console.log('standings', standings)}, [standings])

	const fetchStorageFavoritesLeagues = async () => {
		const res = await fetch('/api/football/favorite/leagues', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({user: session.user['_id']}),
		})
		const json = await res.json()
		setFavoriteLeagues(json.favorite.leagues)
	}

	const handleChangeLeague = (e: React.ChangeEvent<HTMLInputElement>, api_id: number) =>
		e.target.checked
			? setLeaguesApiId((prevState) => [...prevState, api_id])
			: setLeaguesApiId(leaguesApiId.filter((item) => item !== api_id))

	const groupCountries = (data: IResponse[]) => {
		return data.reduce((res: Object, item: IResponse) => {
			let key = item.country._id
			if (!res[key]) res[key] = []
			res[key].push(item)
			return res
		}, {})
	}

	const fetchCheckedStandings = () => {
		setStandings([])
		leaguesApiId.forEach(async (api_id) => {
			const leagueStanding = await fetchStandings({league: api_id, season: 2023})

			setStandings((prev) => [...prev, leagueStanding])
		})
	}

	{/* const fetchStandings = async (apiId: number, seasonYear: number) => {
	
	
		// const res = await fetch(FOOTBALL_API_ENDPOINT.concat('/standings').concat(`?league=${apiId}&season=${seasonYear}`), {
		//     method: 'GET',
		//     headers: {
		//         'X-RapidAPI-Key': X_RAPIDAPI_KEY,
		//         'X-RapidAPI-Host': X_RAPIDAPI_HOST
		//     },
		// })
		// const json = await res.json()
		// setStandings(prev => [...prev, json.response])

		const timeout = Math.round(60 * 1000 / FOOTBALL_API_RPM)
		const controller = new AbortController()
		const id = setTimeout(() => controller.abort(), timeout)
		const res = await fetch(`/api/static/standings/${seasonYear}/${apiId}`, {
			method: 'GET',
			headers: {'Content-Type': 'application/json'},
			signal: controller.signal,
		})
		const json = await res.json()
		clearTimeout(id)
		// console.log('fetchStanding ', apiId, json);
		setStandings((prev) => [...prev, json.response.response[0]])
	}
	*/}

	const countries = (data: IResponse[]): IStorageCountry[] => data.map((item) => item.country)

	const leagues = (data: IResponse[], countryId: string): IStorageLeague[] =>
		data.map((item) => item.league).filter((item) => item.country === countryId)

	return (
		<RootLayout title='Leagues' lead='statistics'>
			<StatisticsLayout>
				<Row className='leaguesPage'>
					<Col lg={6} md={6}>

						<ButtonToolbar className='justify-content-end' aria-label='toolbar leagues actions'>
							<ButtonGroup size='sm' className='mb-2' aria-label=''>
								<Button size='sm'
									variant='outline-primary'
									onClick={(e) => fetchCheckedStandings()}
								>
									<FontAwesomeIcon icon={faDownload} className="me-2" />Fetch checked
								</Button>
								<Button size='sm'
									variant='outline-primary'
								>
									<FontAwesomeIcon icon={faRefresh} className="me-2" /> Refresh
								</Button>
							</ButtonGroup>
						</ButtonToolbar>
						{favoriteLeagues &&
							<Accordion defaultActiveKey={Object.keys(groupCountries(favoriteLeagues))[0]} flush={true} alwaysOpen={true}>
								{Object.keys(groupCountries(favoriteLeagues))
									.map((_id: string) => countries(favoriteLeagues).find((item) => item._id === _id))
									.sort((a, b) => (a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1))
									.map((country: IStorageCountry) => (
										<Accordion.Item eventKey={country._id} key={country._id}>
											<Accordion.Header as='div'>
												<CountryTitle country={country} />
											</Accordion.Header>
											<Accordion.Body className='p-1' as='div' >
												<ListGroup className='list-group-flush'>
													{leagues(favoriteLeagues, country._id)
														.filter(item => item.type !== ELeagueType.CUP)
														.map((league: IStorageLeague) =>
															<ListGroup.Item key={league._id} className='p-0'>
																<LeagueStanding league={league}>
																	<Form.Check checked={true} onChange={(e) => handleChangeLeague(e, league.api_id)} />
																</LeagueStanding>
															</ListGroup.Item >
														)}
												</ListGroup>
											</Accordion.Body>
										</Accordion.Item>
									))}
							</Accordion>
						}
					</Col>
					<Col lg={6} md={6}>
					</Col>
				</Row>
			</StatisticsLayout>
		</RootLayout >
	)
}

export default FootballStatisticsLeaguePage
