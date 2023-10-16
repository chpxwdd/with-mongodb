import * as React from 'react';
import {Standing as IRapidStanding, Team as IRapidTeam, League as ILeagueStanding} from '@/models/rapid-api/response/v3standings'
import {EViewStanding, IStorageLeague} from '@/models/mongo/storage.types';

import {Badge, Button, ButtonGroup, Form, ListGroup} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDownload, faSave} from '@fortawesome/free-solid-svg-icons';
import LeagueStandingGrid from './grid/LeagueStandingGrid';
import LeagueTitle from '../common/LeagueTitle';
import TeamTitle from '../common/TeamTitle';
import {fetchStandings} from '@/lib/rapid-api/standings';

interface IProps {
    league: IStorageLeague
    children: React.ReactElement
}

const LeagueStanding = ({league, children}: IProps) => {
    const [standing, setStanding] = React.useState<IRapidStanding[]>()
    const [year, setYear] = React.useState<number>(new Date().getFullYear())
    const [seasons, setSeasons] = React.useState<boolean>()
    const [loading, setLoading] = React.useState<boolean>()

    // const apiFetchStandings = async (league: IStorageLeague) => {
    //     const res = await fetch(`/api/static/standings/${year}/${league.api_id}`, {
    //         method: 'GET',
    //         headers: {'Content-Type': 'application/json'},
    //     })
    //     const json = await res.json()
    //     setStanding(json.response.response[0].league.standings[0])
    // }

    const handleFetchStanding = async () => {
        const leagueStanding = await fetchStandings({league: league.api_id, season: year})
        console.log("leagueStanding", leagueStanding);
        setStanding(leagueStanding.league.standings[0])
    }

    return (
        <>
            <div className='d-flex align-items-center ms-1 my-1'>
                {children}
                <div className='d-flex align-items-center justify-content-between w-100'>
                    <LeagueTitle league={league} />
                    <div className='d-flex align-items-center w-auto'>
                        <Form.Select size='sm' className='border-primary me-2' defaultValue={year}><option value={year}>{year}</option></Form.Select>
                        <ButtonGroup>
                            <Button size='sm'
                                variant="outline-primary"
                                className='d-flex align-items-baseline'
                                onClick={(e) => handleFetchStanding()}
                            >
                                <FontAwesomeIcon icon={faDownload} className='me-1 my-0' />&nbsp;Team&nbsp;standing
                            </Button>
                        </ButtonGroup>
                    </div>
                </div>
            </div>
            {standing &&

                <ListGroup className='list-group-flush ps-3' style={{fontSize: "12px"}}>
                    {standing.map(item => item.team)
                        .sort((a, b) => a.name > b.name ? 1 : -1)
                        .map((team, index) =>
                            <ListGroup.Item key={index} className='d-flex py-1 px-1' action>
                                <Form.Check />
                                <TeamTitle team={{...team, _id: null, api_id: team.id}} />
                            </ListGroup.Item>
                        )}
                </ListGroup>
            }
        </>
    )
}

export default LeagueStanding
