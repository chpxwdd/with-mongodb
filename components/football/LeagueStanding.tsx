import * as React from 'react';
import {Button, Form, Tab, Table, Tabs} from 'react-bootstrap';
import {Standing as IStanding, RootObject as IRootObject, Response as IStandingResponse, Team as ITeam, League as ILeagueStanding, League, Team} from '@/models/rapid-api/v3standings';
import Image from 'next/image';
import {IStorageFavorite, IStorageLeague, IStorageTeam} from '@/models/mongo/storage.types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck, faCheckCircle, faSave, faStar} from '@fortawesome/free-solid-svg-icons';
import {useSession} from 'next-auth/react';
import {EStorageFavorite} from '@/constants/storage';
import {addFavorite, fetchFavorites, fetchLeague, fetchLeagueTeams, removeFavorite} from '@/lib/storage';
import {ObjectId} from 'mongodb';

interface IProps {
    league: ILeagueStanding
}

const RapidAPILeagueStanding = ({league}: IProps) => {

    const [team, setTeam] = React.useState<IStorageTeam>()
    const [teams, setTeams] = React.useState<IStorageTeam[]>()
    const [storageLeague, setStorageLeague] = React.useState<IStorageLeague>()
    const [storageTeams, setStorageTeams] = React.useState<IStorageTeam[]>()
    const [favorites, setFavorites] = React.useState<IStorageFavorite | null>(null)
    const {update, data: session, status} = useSession()

    React.useEffect(() => {
        fetchLeague(league.id, setStorageLeague)
        fetchLeagueTeams(league.id, setStorageTeams)
        fetchFavorites(session.user['_id'], setFavorites)
    }, [])

    // React.useEffect(() => {console.log("UE [team]", team);}, [team])
    // React.useEffect(() => {console.log("UE [storageTeams]", storageTeams)}, [storageTeams])
    // React.useEffect(() => {console.log("UE [storageLeague]", storageLeague)}, [storageLeague])

    const handleRowClick = (e: React.MouseEvent<Element, MouseEvent>, team: ITeam) => {
        e.preventDefault()
        setTeam({
            api_id: team.id,
            name: team.name,
            logo: team.logo,
            league: [league.id]
        })
    }

    const saveTeam = async (e: React.MouseEvent<Element, MouseEvent>, team: ITeam, storageleague: IStorageLeague) => {
        console.log("storageleague", storageleague);

        if (storageTeams?.find(item => item.api_id === team.id)) return
        const res = await fetch('/api/football/team/add', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                team: {
                    api_id: team.id,
                    name: team.name,
                    logo: team.logo,
                    league: storageleague._id
                }
            })
        })
        const json = await res.json()
        console.log("save team responce", json)
        fetchLeagueTeams(league.id, setStorageTeams)
    }

    return (<Tabs defaultActiveKey={"Standing"} className='justify-content-end rounded border pt-2 px-2 bg-default'>
        {league.standings.map((standing: IStanding[], index: number) => {
            return (
                <Tab key={String(league.id).concat(String(index))}
                    title={`Standing${index ? `#${index}` : ''}`}
                    eventKey={`Standing${index ? `#${index}` : ''}`}
                >
                    <section className='pt-5'>
                        <nav></nav>
                        <Table className='table-hover mb-2 mt-0' size='sm' style={{whiteSpace: 'nowrap'}}>
                            <thead>
                                <tr>
                                    <th className='text-center' style={{width: "50px"}}></th>
                                    <th className="text-center" style={{width: "20px"}}></th>
                                    <th>Team</th>
                                    <th className="text-center" style={{width: "5%"}}>Points</th>
                                    <th className="text-center" style={{width: "5%"}}>Diff</th>
                                    <th className="text-center" style={{width: "5%"}}>Gf</th>
                                    <th className="text-center" style={{width: "5%"}}>Ga</th>
                                    <th className="text-center" style={{width: "5%"}}>Games</th>
                                    <th className="text-center" style={{width: "5%"}}>Lose</th>
                                    <th className="text-center" style={{width: "5%"}}>Draw</th>
                                    <th className="text-center" style={{width: "5%"}}>Win</th>
                                </tr>
                            </thead>
                            <tbody>
                                {standing.map((row, index) => {
                                    const {all, goalsDiff, team, rank, points} = row
                                    return (
                                        <tr key={index}
                                            className='text-center'
                                            style={{cursor: "pointer"}}
                                            onClick={(e) => handleRowClick(e, team)}>
                                            <td className='text-right'>
                                                {!storageTeams?.find(item => item.api_id === team.id) ?
                                                    <Button variant="link"
                                                        size='sm'
                                                        onClick={(e) => saveTeam(e, team, storageLeague)}
                                                        className='p-0 m-0'>
                                                        <FontAwesomeIcon icon={faSave} className="text-muted" />
                                                    </Button>
                                                    : <FontAwesomeIcon icon={faSave} className="text-success" />
                                                }
                                            </td>
                                            <td className="py-1 ">{rank}</td>
                                            <td className="py-1 text-start"><Image src={team.logo} alt={team.name} width={18} height={18} className='me-1' />{team.name}</td>
                                            <td className="py-1 "><strong>{points}</strong></td>
                                            <td className="py-1 ">{goalsDiff}</td>
                                            <td className="py-1 text-success">{all.goals.for}</td>
                                            <td className="py-1 text-danger">{all.goals.against}</td>
                                            <td className="py-1 ">{all.played}</td>
                                            <td className="py-1 ">{all.lose}</td>
                                            <td className="py-1 ">{all.draw}</td>
                                            <td className="py-1 ">{all.win}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table >
                    </section>
                </Tab>
            )
        }
        )}
    </Tabs >
    )
}

export default RapidAPILeagueStanding

