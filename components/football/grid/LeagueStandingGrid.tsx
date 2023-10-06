import * as React from 'react';
import {Badge, Button, Form, FormCheck, Table} from 'react-bootstrap';
import {Standing as IStanding, Team as ITeam, League as ILeagueStanding} from '@/models/rapid-api/response/v3standings';
import {EViewStanding} from '@/models/mongo/storage.types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSave} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import {FootballContext} from '@/context/FootballContext';
interface IProps {

}

interface IProps {
    standing: IStanding[]
    renderView: EViewStanding
}

export default ({standing, renderView}: IProps) => {

    const {league, setLeague, team, setTeam} = React.useContext(FootballContext)

    const handleRowClick = (e: React.MouseEvent<Element, MouseEvent>, team: ITeam) => {
        e.preventDefault()
        setTeam({
            _id: null,
            api_id: team.id,
            name: team.name,
            logo: team.logo
        })
    }

    const onChange = (e, api_id: number) => {

    }

    return (
        <Table className='table-hover table-light mb-2 mt-0' size='sm' style={{whiteSpace: 'nowrap', width: "100%"}}>
            <thead>
                <tr>
                    {/* <th className='text-center' style={{width: "50px"}}></th> */}
                    <th className="text-center fw-light text-muted" style={{width: "20px"}}>#</th>
                    <th>Team</th>
                    <th className="text-center" style={{width: "5%"}}>p</th>
                    {
                        (renderView === EViewStanding.FAT) &&
                        <>
                            <th className="text-center" style={{width: "5%"}}>Diff</th>
                            <th className="text-center" style={{width: "5%"}}>Gf</th>
                            <th className="text-center" style={{width: "5%"}}>Ga</th>
                            <th className="text-center" style={{width: "5%"}}>Games</th>
                            <th className="text-center" style={{width: "5%"}}>Lose</th>
                            <th className="text-center" style={{width: "5%"}}>Draw</th>
                            <th className="text-center" style={{width: "5%"}}>Win</th>
                        </>
                    }
                </tr>
            </thead>
            <tbody>
                {standing.map((row, index) => {
                    const {all, goalsDiff, team, rank, points} = row
                    return (
                        <tr key={index}
                            className='text-center align-items-center'
                            style={{cursor: "pointer"}}
                            onClick={(e) => handleRowClick(e, team)}>
                            {/* <td className='text-right'><FontAwesomeIcon icon={faSave} className="text-success" />/td> */}
                            <td className="py-1 text-muted"><small>{rank}</small></td>
                            <td className="py-1 text-start">
                                <div className='d-flex align-items-center  justify-content-between'>
                                    <div className='d-flex'>
                                        <Form.Check className='text-warning  align-items-end' checked={true} onChange={(e) => onChange(e, team.id)} />
                                        <Image src={team?.logo || ""}
                                            alt={team.name}
                                            width={0} height={0}
                                            className='mx-2 mt-1'
                                            style={{objectFit: "contain", width: 'auto', height: "auto"}}
                                        />
                                        {team.name}
                                    </div>
                                    <div>
                                        <Badge pill bg='warning' className='mx-2 fw-light p-1'><small>{team.id}</small></Badge>
                                    </div>
                                </div>
                            </td>
                            <td className="py-1">{points}</td>
                            {
                                (renderView === EViewStanding.FAT) &&
                                <>
                                    <td className="py-1">{goalsDiff}</td>
                                    <td className="py-1 text-success">{all.goals.for}</td>
                                    <td className="py-1 text-danger">{all.goals.against}</td>
                                    <td className="py-1">{all.played}</td>
                                    <td className="py-1 text-danger">{all.lose}</td>
                                    <td className="py-1 text-warning">{all.draw}</td>
                                    <td className="py-1 text-success">{all.win}</td>
                                </>
                            }
                        </tr>
                    )
                })}
            </tbody>
        </Table >
    )
}

