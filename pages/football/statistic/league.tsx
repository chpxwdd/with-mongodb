
import * as React from 'react'
import {NextPage} from 'next'
import {getSession, useSession} from 'next-auth/react'
import RootLayout from '@/layouts/RootLayout'
import {ELeagueType, IStorageCountry, IStorageLeague} from '@/models/mongo/storage.types'
import {Accordion, Col, ListGroup, Row} from 'react-bootstrap'
import StatisticsLayout from '@/layouts/StatisticsLayout'
import {Response as IStandingResponse} from '@/models/rapid-api/response/v3standings'
import {FlashMessageContext, IFlashMessage} from '@/context/FlashMessageContext'
import LeagueStanding from '@/components/football/LeagueStanding'
import CountryTitle from '@/components/common/CountryTitle'
import {fetchStandings} from '@/lib/rapid-api/standings'
import {RapidContext} from '@/context/RapidContext'
import ListItems from '@/components/football/ListItems'
import useFavorite from '@/hooks/useFavorite'

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
	const {update, data: session, status} = useSession()
	const [favoriteLeagues, setFavoriteLeagues] = React.useState<IResponse[]>()

	const [leaguesApiId, setLeaguesApiId] = React.useState<number[]>([])
	const [standings, setStandings] = React.useState<IStandingResponse[]>([])
	const {leagueIDs, setLeagueIDs, teamIDs, setTeamIDs} = React.useContext(RapidContext)

	const {favorite: storageFavorite, add: addToFav, remove: removeFromFav} = useFavorite()

	React.useEffect(() => {
		fetchStorageFavoritesLeagues()

		// console.log("leagueIDs", leagueIDs);
		// console.log("UE leagues page", storageFavorite);

	}, [])


	// React.useEffect(() => {console.log("UE leagueIDs", leagueIDs)}, [leagueIDs])
	// React.useEffect(() => {console.log("UE teamIDs", teamIDs)}, [teamIDs])

	const fetchStorageFavoritesLeagues = async () => {
		const res = await fetch('/api/football/favorite/leagues', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({user: session.user['_id']}),
		})
		const json = await res.json()
		setFavoriteLeagues(json.favorite.leagues)
	}


	const groupCountries = (data: IResponse[]) => {
		return data.reduce((res: Object, item: IResponse) => {
			let key = item.country._id
			if (!res[key]) res[key] = []
			res[key].push(item)
			return res
		}, {})
	}

	// const fetchCheckedStandings = () => {
	// 	// setStandings([])
	// 	console.log("FETCH CHECKED STANDING for", leagueIDs);
	// 	leagueIDs.forEach(async (id) => {
	// 		const leagueStanding = await fetchStandings({league: id, season: 2023})
	// 		setStandings(leagueStanding)
	// 	})
	// }

	return (
		<RootLayout title='Leagues' lead='statistics'>
			<StatisticsLayout>
				<Row className='leaguesPage'>
					<Col lg={4} md={4}>
						{favoriteLeagues &&
							<Accordion defaultActiveKey={Object.keys(groupCountries(favoriteLeagues))[0]} flush={true} alwaysOpen={true}>
								{Object.keys(groupCountries(favoriteLeagues))
									.map((_id: string) => favoriteLeagues.map((item) => item.country).find((item) => item._id === _id))
									.sort((a, b) => (a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1))
									.map((country: IStorageCountry) => (
										<Accordion.Item eventKey={country._id} key={country._id}>
											<Accordion.Header as='div'>
												<CountryTitle country={country} />
											</Accordion.Header>
											<Accordion.Body className='p-0' as='div' >
												<ListGroup className='list-group-flush'>
													{favoriteLeagues
														.map((item) => item.league)
														.filter((item) => item.country === country._id)
														.filter(item => item.type !== ELeagueType.CUP)
														.map((league: IStorageLeague) =>
															<ListGroup.Item key={league._id} className='p-0' >
																<LeagueStanding league={league} />
															</ListGroup.Item >
														)}
												</ListGroup>
											</Accordion.Body>
										</Accordion.Item>
									))}
							</Accordion>
						}
					</Col>
					<Col lg={4} md={4}>
						<ListItems />
					</Col>
				</Row>
			</StatisticsLayout>
		</RootLayout >
	)
}

export default FootballStatisticsLeaguePage
