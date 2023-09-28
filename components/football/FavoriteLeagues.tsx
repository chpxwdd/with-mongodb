import * as React from 'react';
import {useSession} from "next-auth/react";
import {Button, ButtonGroup, Form, ListGroup} from 'react-bootstrap';
import Image from 'next/image';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDownload, faSave} from '@fortawesome/free-solid-svg-icons';

const FavoriteLeagues = () => {
    const [leagues, setLeagues] = React.useState<any[]>()
    const [leaguesApiId, setLeaguesApiId] = React.useState<number[]>([])
    const {update, data: session, status} = useSession()

    React.useEffect(() => {
        fetchFavoritesLeagues()
    }, [])

    // React.useEffect(() => {    }, [leaguesApiId])

    const fetchFavoritesLeagues = async () => {
        const res = await fetch('/api/football/favorite', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({user: session.user['_id']}),
        });
        const json = await res.json()

        console.log("json.favorite[0].leagues", json.favorite[0].leagues)


        setLeagues(json.favorite[0].leagues)

    }
    const handleChangeLeague = (e: React.ChangeEvent<HTMLInputElement>, api_id: number) =>
        (e.target.checked) ?
            setLeaguesApiId(prevState => [...prevState, api_id]) :
            setLeaguesApiId(leaguesApiId.filter(item => item !== api_id))


    return (
        <ul>

        </ul>
    )
}
export default FavoriteLeagues