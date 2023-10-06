import * as React from 'react';
import {Button, Form, Tab, Table, Tabs} from 'react-bootstrap';
import {Standing as IStanding, Team as ITeam, League as ILeagueStanding} from '@/models/rapid-api/response/v3standings';
import Image from 'next/image';
import {EViewStanding, IStorageFavorite, IStorageLeague, IStorageTeam} from '@/models/mongo/storage.types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck, faCheckCircle, faSave, faStar} from '@fortawesome/free-solid-svg-icons';
import {useSession} from 'next-auth/react';
import {EStorageFavorite} from '@/constants/storage';
import {fetchFavorites, fetchLeague, fetchLeagueTeams} from '@/lib/storage';
import LeagueStandingGrid from './grid/LeagueStandingGrid';

interface IProps {
    league: ILeagueStanding
    renderView: EViewStanding
}

const RapidAPILeagueStanding = ({league, renderView}: IProps) => {

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

    return league.standings.map((standing: IStanding[], index: number) =>
        <LeagueStandingGrid standing={standing} renderView={EViewStanding.THIN} />
    )

}

export default RapidAPILeagueStanding

