import * as React from 'react'
import { NextPage } from 'next'
import { getSession, useSession } from 'next-auth/react'
import RootLayout from '@/layouts/RootLayout'
import { IStorageCountry, IStorageLeague } from '@/models/mongo/storage.types'
import {
	Badge,
	Button,
	ButtonGroup,
	ButtonToolbar,
	Card,
	Col,
	Form,
	ListGroup,
	Row,
	Stack,
	Table,
} from 'react-bootstrap'
import Image from 'next/image'
import worldFlag from '@/image/world.svg'
import StatisticsLayout from '@/layouts/StatisticsLayout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import LeagueListGroupItem from '@/components/football/statistics/LeagueListGroupItem'
import { Response as IStandingResponse } from '@/models/rapid-api/v3standings'
import RapidAPILeagueStanding from '@/components/football/LeagueStanding'
import FavoriteLeagues from '@/components/football/FavoriteLeagues'
import { EBootstrapVariant } from '@/models/bootstpap/bs.types'
import { FlashMessageContext, IFlashMessage } from '@/context/FlashMessageContext'

export async function getServerSideProps(context) {
	const session = await getSession({ req: context.req })
	if (!session) return { redirect: { destination: '/auth/login', permanent: false } }
	return { props: { session } }
}

interface Props {}

interface IResponse {
	_id: string
	league: IStorageLeague
	country: IStorageCountry
}

const Page: NextPage<Props> = ({}) => {
	const [favoriteLeagues, setFavoriteLeagues] = React.useState<IResponse[]>()
	const [leaguesApiId, setLeaguesApiId] = React.useState<number[]>([])
	const [standings, setStandings] = React.useState<IStandingResponse[]>()
	const { update, data: session, status } = useSession()
	const { flashMessages, setFlashMessages } = React.useContext(FlashMessageContext)

	React.useEffect(() => {
		fetchStorageFavoritesLeagues()
	}, [])

	// React.useEffect(() => {console.log("leagues", favoriteLeagues)}, [favoriteLeagues])
	// React.useEffect(() => {console.log("standings", standings)}, [standings])

	const fetchStorageFavoritesLeagues = async () => {
		const res = await fetch('/api/football/favorite/leagues', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ user: session.user['_id'] }),
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
			headers: { 'Content-Type': 'application/json' },
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
					<Col lg={4} md={6}>
						{favoriteLeagues && (
							<aside>
								<ButtonToolbar className="shadow-sm border-bottom bg-light p-2 ">
									<ButtonGroup size="sm">
										<Button
											size="sm"
											variant="primary"
											onClick={(e) => fetchCheckedStandings()}
											disabled={!leaguesApiId.length}
										>
											{' '}
											fetch
										</Button>
										<Button size="sm" variant="default">
											{' '}
											refresh
										</Button>
										<Button size="sm" variant="default">
											{' '}
											options
										</Button>
									</ButtonGroup>
								</ButtonToolbar>
								<ListGroup className="list-group-flush m-0">
									{Object.keys(groupCountries(favoriteLeagues))
										.map((country_id: string) =>
											countries(favoriteLeagues).find((item) => item._id === country_id)
										)
										.sort((a, b) => (a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1))
										.map((country: IStorageCountry) => (
											<ListGroup.Item key={country._id} className="p-0" action>
												<div className="d-flex justify-content-between py-1">
													<div className="d-flex mx-2 align-items-center">
														<Image
															src={country?.flag || worldFlag}
															width={0}
															height={0}
															alt={country.name}
															className="border border-1 border-default rounded rounded-1"
															style={{
																objectFit: 'contain',
																width: '20px',
																height: 'auto',
															}}
														/>
														<div className="ms-2">{country.name}</div>
													</div>
													<div className=" mx-2 align-items-center">
														<FontAwesomeIcon icon={faAngleDown} />
													</div>
												</div>
												<div>
													<ListGroup className="list-group-flush p-0 mx-0 mt-0 ">
														{leagues(favoriteLeagues, country._id).map((league) => (
															<LeagueListGroupItem
																key={league._id}
																league={league}
																leaguesApiId={leaguesApiId}
																onChange={handleChangeLeague}
															/>
														))}
													</ListGroup>
												</div>
											</ListGroup.Item>
										))}
								</ListGroup>
							</aside>
						)}
					</Col>
					<Col lg={8} md={6}>
						<nav className="justify-content-between border shadow-sm p-2 rounded rounded-2 mb-3 bg-light">
							<ButtonGroup size="sm">
								<Button
									variant="warning"
									onClick={(e) => fetchCheckedStandings()}
									disabled={!leaguesApiId.length}
								>
									{' '}
									fetch standing
								</Button>
							</ButtonGroup>
						</nav>
						{standings &&
							standings.map((standing: IStandingResponse) => (
								<RapidAPILeagueStanding league={standing.league} />
							))}
					</Col>
				</Row>
			</StatisticsLayout>
		</RootLayout>
	)
}

export default Page
