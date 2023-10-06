
import * as React from 'react'
import {NextPage} from 'next'
import {getSession, useSession} from 'next-auth/react'
import RootLayout from '@/layouts/RootLayout'
import {ELeagueType, EViewStanding, IStorageCountry, IStorageLeague} from '@/models/mongo/storage.types'
import {Button, ButtonGroup, ButtonToolbar, Col, ListGroup, Row} from 'react-bootstrap'
import Image from 'next/image'
import worldFlag from '@/image/world.svg'
import StatisticsLayout from '@/layouts/StatisticsLayout'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'
import LeagueListGroupItem from '@/components/football/statistics/LeagueListGroupItem'
import {Response as IStandingResponse} from '@/models/rapid-api/response/v3standings'
import RapidAPILeagueStanding from '@/components/football/LeagueStanding'
import {FlashMessageContext, IFlashMessage} from '@/context/FlashMessageContext'

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

	// React.useEffect(() => {console.log("leagues", favoriteLeagues)}, [favoriteLeagues])
	// React.useEffect(() => {console.log("standings", standings)}, [standings])

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
		leaguesApiId.forEach((api_id) => fetchStandings(api_id, 2023))
	}

	const fetchStandings = async (apiId: number, seasonYear: number) => {
		// const res = await fetch(FOOTBALL_API_ENDPOINT.concat('/standings').concat(`?league=${apiId}&season=${seasonYear}`), {
		//     method: 'GET',
		//     headers: {
		//         "X-RapidAPI-Key": X_RAPIDAPI_KEY,
		//         "X-RapidAPI-Host": X_RAPIDAPI_HOST
		//     },
		// })
		// const json = await res.json()
		// setStandings(prev => [...prev, json.response])

		const timeout = 1000
		const controller = new AbortController()
		const id = setTimeout(() => controller.abort(), timeout)
		const res = await fetch(`/api/static/standings/${seasonYear}/${apiId}`, {
			method: 'GET',
			headers: {'Content-Type': 'application/json'},
			signal: controller.signal,
		})
		const json = await res.json()
		clearTimeout(id)
		// console.log("fetchStanding ", apiId, json);
		setStandings((prev) => [...prev, json.response.response[0]])
	}

	const countries = (data: IResponse[]): IStorageCountry[] => data.map((item) => item.country)

	const leagues = (data: IResponse[], countryId: string): IStorageLeague[] =>
		data.map((item) => item.league).filter((item) => item.country === countryId)

	return (
		<RootLayout title="Statistics" lead="view statistics">
			<StatisticsLayout>
				<Row>
					<Col lg={3} md={4}>
						{favoriteLeagues &&
							<ListGroup className="list-group-flush m-0 rounded bg-light">
								{Object.keys(groupCountries(favoriteLeagues))
									.map((_id: string) => countries(favoriteLeagues).find((item) => item._id === _id))
									.sort((a, b) => (a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1))
									.map((country: IStorageCountry) => (
										<ListGroup.Item key={country._id} className="p-1 border-0  bg-light">
											<div className="d-flex justify-content-between py-1 bg-dark text-light rounded">
												<div className="d-flex mx-2 align-items-center">
													<Image src={country?.flag || worldFlag} width={0} height={0} alt={country.name} className="border border-1 border-default rounded rounded-1" style={{objectFit: 'contain', width: '20px', height: 'auto', }} />
													<div className="ms-2">{country.name}</div>
												</div>
												<div className="me-2 align-items-center">
													<FontAwesomeIcon icon={faAngleDown} />
												</div>
											</div>
											<div className=''>
												<ListGroup className="list-group-flush">
													{leagues(favoriteLeagues, country._id).map((league) => {
														if (league.type === ELeagueType.CUP) return
														return <LeagueListGroupItem key={league._id} league={league} leaguesApiId={leaguesApiId} onChange={handleChangeLeague} />
													})}
												</ListGroup>
											</div>
										</ListGroup.Item>
									))}
							</ListGroup>
						}
					</Col>
					<Col lg={3} md={4}>
						<ButtonGroup size="sm" className='mb-2'>
							<Button size="sm" variant="primary" onClick={(e) => fetchCheckedStandings()} disabled={!leaguesApiId.length}>fetch</Button>
							<Button size="sm" variant="default">refresh</Button>
							<Button size="sm" variant="default">options</Button>
						</ButtonGroup>
						{standings &&
							standings.map((standing: IStandingResponse) => (
								<RapidAPILeagueStanding league={standing.league} renderView={EViewStanding.THIN} />
							))}
					</Col>
					<Col lg={6} md={4}>

					</Col>
				</Row>
			</StatisticsLayout>
		</RootLayout >
	)
}

export default FootballStatisticsLeaguePage
