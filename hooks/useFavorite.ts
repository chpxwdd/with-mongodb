import {EStorageFavorite} from '@/constants/storage';
import {IStorageFavorite} from '@/models/mongo/storage.types';
import {useSession} from 'next-auth/react';
import * as React from 'react';



const useFavorite = () => {
    const {update, data: session, status} = useSession()
    const [favorite, setFavorite] = React.useState<IStorageFavorite>(null)

    React.useEffect(() => {
        fetchAll(session.user["_id"])
    }, [])

    const fetchAll = async (_user_id: string) => {
        const res = await fetch(`/api/football/favorite/user/${_user_id}`, {method: 'GET', headers: {'Content-Type': 'application/json'}})
        const json = await res.json()
        setFavorite(json.favorite)
    }

    const add = async (_id: string, module: EStorageFavorite) => {
        const res = await fetch('/api/football/favorite/add', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({_id, user: session.user["_id"], module})
        })
        const json = await res.json()
        console.log("after add", json.favorite)
        setFavorite(json.favorite)
    }

    const remove = async (_id: string, module: EStorageFavorite) => {
        const res = await fetch('/api/football/favorite/remove', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({_id, user: session.user["_id"], module})
        })
        const json = await res.json()

        console.log("after remove", json.favorite)
        setFavorite(json.favorite)
    }

    return {favorite, add, remove}

}

export default useFavorite