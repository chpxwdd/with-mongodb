import * as React from 'react';
import {Standing as IRapidStanding, Team as IRapidTeam, League as ILeagueStanding} from '@/models/rapid-api/response/v3standings'
import {EViewStanding, IStorageLeague} from '@/models/mongo/storage.types';

import {Badge, Button, ButtonGroup, Form, ListGroup} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDownload, faSave} from '@fortawesome/free-solid-svg-icons';
import LeagueTitle from '../common/LeagueTitle';
import TeamTitle from '../common/TeamTitle';
import {fetchStandings} from '@/lib/rapid-api/standings';
import {RapidContext} from '@/context/RapidContext';

interface IProps {
    league: IStorageLeague
}

const LeagueStanding = ({league}: IProps) => {
    const [standing, setStanding] = React.useState<IRapidStanding[]>()
    const [year, setYear] = React.useState<number>(new Date().getFullYear())

    const {leagueIDs, setLeagueIDs, teamIDs, setTeamIDs} = React.useContext(RapidContext)


    const handleFetchStanding = async () => {
        const leagueStanding = await fetchStandings({league: league.api_id, season: year})
        // console.log("leagueStanding", leagueStanding);
        setStanding(leagueStanding.league.standings[0])
    }

    const handleChangeLeague = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
        e.target.checked
            ? setLeagueIDs([...leagueIDs, id])
            : setLeagueIDs(leagueIDs.filter((item) => item !== id))
    }
    const handleChangeTeam = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
        e.target.checked
            ? setTeamIDs([...teamIDs, id])
            : setTeamIDs(teamIDs.filter((item) => item !== id))
    }

    return (
        <>
            <div className='d-flex align-items-center ms-1 my-1'>
                <Form.Check checked={leagueIDs.includes[league.api_id]} onChange={(e) => handleChangeLeague(e, league.api_id)} />
                <div className='d-flex align-items-center justify-content-between w-100'>
                    <LeagueTitle league={league} />
                    <div className='d-flex align-items-center w-auto'>
                        <Form.Select size='sm' className='border-primary me-2' defaultValue={year}>
                            <option value={year}>{year}</option>
                        </Form.Select>
                        <Button size='sm'
                            variant="primary"
                            className='d-flex align-items-baseline'
                        // onClick={() => handleFetchStanding()}
                        >
                            <FontAwesomeIcon icon={faDownload} className='me-1 my-0' />Teams
                        </Button>
                    </div>
                </div>
            </div>
            {standing &&

                <ListGroup className='list-group-flush' style={{fontSize: "12px"}}>
                    {standing.map(item => item.team)
                        .sort((a, b) => a.name > b.name ? 1 : -1)
                        .map((team, index) =>
                            <ListGroup.Item key={index} className='d-flex py-1 ps-4'>
                                <Form.Check checked={teamIDs.includes[team.id]} onChange={(e) => handleChangeTeam(e, team.id)} />
                                <TeamTitle team={{...team, _id: null, api_id: team.id}} />
                            </ListGroup.Item>
                        )}
                </ListGroup>
            }
        </>
    )
}

export default LeagueStanding
