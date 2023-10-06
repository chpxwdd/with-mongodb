import * as React from 'react'
import {NextPage} from 'next'
import {getSession, useSession} from 'next-auth/react'
import RootLayout from '@/layouts/RootLayout'
import {IStorageCountry, IStorageLeague} from '@/models/mongo/storage.types'
import {Badge, Button, Col, Form, ListGroup, Row} from 'react-bootstrap'
import Image from 'next/image'
import worldFlag from '@/image/world.svg'
import {FlashMessageContext, IFlashMessage} from '@/context/FlashMessageContext'
import {EBootstrapVariant} from '@/models/bootstpap/bs.types'
import StatisticsLayout from '@/layouts/StatisticsLayout'

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

const FootballStatisticsPage: NextPage<Props> = ({}) => {
	const [favoriteLeagues, setFavoriteLeagues] = React.useState<IResponse[]>()
	const [leaguesApiId, setLeaguesApiId] = React.useState<number[]>([])
	const {update, data: session, status} = useSession()
	const {flashMessages, setFlashMessages} = React.useContext(FlashMessageContext)

	React.useEffect(() => {
		console.log('session ', session)
		fetchStorageFavoritesLeagues()
	}, [])

	React.useEffect(() => {
		console.log('leagues', favoriteLeagues)
		// groupCountries(favoriteLeagues)
	}, [favoriteLeagues])

	const fetchStorageFavoritesLeagues = async () => {
		const res = await fetch('/api/football/favorite/leagues', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({user: session.user['_id']}),
		})
		const json = await res.json()

		console.log('object', json.favorite)

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

	const countries = (data: IResponse[]): IStorageCountry[] => data.map((item) => item.country)

	const leagues = (data: IResponse[], countryId: string): IStorageLeague[] =>
		data.map((item) => item.league).filter((item) => item.country === countryId)

	return (
		<RootLayout title="Statistics" lead="Summary">
			<StatisticsLayout>
				<Row>
					<Col lg={6} md={6}>
						<section style={{fontSize: '0.85rem'}}>
							{favoriteLeagues && (
								<ListGroup className="mx-0 px-0">
									{Object.keys(groupCountries(favoriteLeagues))
										.map((country_id: string) =>
											countries(favoriteLeagues).find((item) => item._id === country_id)
										)
										.sort((a, b) => (a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1))
										.map((country: IStorageCountry) => (
											<ListGroup.Item key={country._id} className="p-0">
												<div className="d-flex justify-content-between py-1">
													<div className="d-flex mx-3 align-items-center">
														<Image
															src={country?.flag || worldFlag}
															width={0}
															height={0}
															alt={country.name}
															className="border border-1 border-default  rounded rounded-1"
															style={{objectFit: 'contain', width: '20px', height: 'auto'}}
														/>
														<div className="ms-2">{country.name}</div>
													</div>
													<Form.Check className="mx-2" />
												</div>
												<div>
													<ListGroup className="list-group-flush p-0 mx-0 mt-0">
														{leagues(favoriteLeagues, country._id).map((league) => (
															<ListGroup.Item key={league._id} className="p-0 ps-4 shadow">
																<div className="d-flex justify-content-between py-1 ">
																	<div className="d-flex  mx-2 align-items-center">
																		<Image
																			src={league?.logo || worldFlag}
																			alt={league.name}
																			width={0}
																			height={0}
																			style={{
																				objectFit: 'contain',
																				width: '1rem',
																				height: '1rem',
																			}}
																		/>
																		<div className="ms-2">{league.name}</div>
																	</div>
																	<div className="d-flex align-items-center">
																		<div
																			style={{
																				fontSize: '0.75rem',
																				fontFamily: 'Consolas',
																			}}
																		>
																			<Badge pill bg="warning">
																				{league.api_id}
																			</Badge>
																		</div>
																		<Form.Check className="mx-2" checked />
																	</div>
																</div>
															</ListGroup.Item>
														))}
													</ListGroup>
												</div>
											</ListGroup.Item>
										))}
								</ListGroup>
							)}
						</section>
					</Col>
					<Col lg={6} md={6}>
						<Button>getTeams</Button>
					</Col>
				</Row>
			</StatisticsLayout>
		</RootLayout>
	)
}
export default FootballStatisticsPage
