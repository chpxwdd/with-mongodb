import * as React from 'react';
import {Badge, Button, Form, FormCheck, Table} from 'react-bootstrap';
import {Standing as IStanding, Team as ITeam, League as ILeagueStanding} from '@/models/rapid-api/response/v3standings';
import {EViewStanding} from '@/models/mongo/storage.types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSave} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import {FootballContext} from '@/context/FootballContext';
import TeamTitle from '@/components/common/TeamTitle';
interface IProps {

}

interface IProps {
    standing: IStanding[]
    renderView: EViewStanding
}

const LeagueStandingGrid = ({standing, renderView}: IProps) => {

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
        <Table className='table-hover table-sm mb-2 mt-0'
            style={{whiteSpace: 'nowrap', fontSize: "85%"}}
        >
            {/*
            <thead>
                <tr>
                    <th></th>
                    <th className="text-center fw-light text-muted" style={{width: "20px"}}>#</th>
                    <th className='w-100'>Team</th>
                    <th className="text-center" style={{width: "5%"}}>p</th>
                    {renderView === EViewStanding.FAT &&
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
                */}
            <tbody>
                {standing.map((row, index) => {
                    const {all, goalsDiff, team, rank, points} = row
                    return (
                        <tr key={index}
                            className='text-center'
                            style={{cursor: "pointer"}}
                            onClick={(e) => handleRowClick(e, team)}>
                            <td><Form.Check onChange={(e) => onChange(e, team.id)} /></td>
                            {/* <td className="text-body-tertiary">{rank}</td> */}
                            <td className="text-start w-100"><TeamTitle team={{...team, _id: null, api_id: team.id}} /></td>
                            <td className="py-1">{points}</td>
                            {renderView === EViewStanding.FAT &&
                                <>
                                    <td className="py-1">{goalsDiff}</td>
                                    <td className="text-success">{all.goals.for}</td>
                                    <td className="text-danger">{all.goals.against}</td>
                                    <td className="py-1">{all.played}</td>
                                    <td className="text-danger">{all.lose}</td>
                                    <td className="text-warning">{all.draw}</td>
                                    <td className="text-success">{all.win}</td>
                                </>
                            }
                        </tr>
                    )
                })}
            </tbody>
        </Table >
    )
}

export default LeagueStandingGrid
