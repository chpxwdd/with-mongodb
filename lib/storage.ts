import {EStorageFavorite} from "@/constants/storage";
import {ITeam} from "@/models/mongo/raidapi.types";
import {IStorageFavorite, IStorageLeague, IStorageTeam, IStorageUser} from "@/models/mongo/storage.types";
import {ObjectId} from "mongodb";


// --------------------------------------------
// FAVORITES
// --------------------------------------------
export const fetchFavorites = async (user: string, cb: React.Dispatch<React.SetStateAction<IStorageFavorite>>) => {
    const res = await fetch('/api/football/favorite/user', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user})
    })
    const json = await res.json();
    if (!json.favorite) throw new Error("lib/storage.ts fetchFavorites error error")

    cb(json.favorite)
}

export const removeFavorite = async (user: ObjectId, _id: ObjectId, module: EStorageFavorite) => {
    const res = await fetch('/api/football/favorite/remove/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({_id, user, module})
    })
    const json = await res.json()

}
export const addFavorite = async (user: ObjectId, _id: ObjectId, module: EStorageFavorite) => {
    const res = await fetch('/api/football/favorite/add/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({_id, user, module})
    })
    const json = await res.json()
}


export const hasStorageFavoriteTeam = (team: ITeam | IStorageTeam, storageFavorite: IStorageFavorite) => {
    const id = isITeam(team) ? team.id : team.api_id
    return storageFavorite[EStorageFavorite.TEAM]?.includes(String(id))
}

// --------------------------------------------
// LEAGUE
// --------------------------------------------

export const fetchLeague = async (id: Number, cb: React.Dispatch<React.SetStateAction<IStorageLeague>>) => {

    const res = await fetch(`/api/football/league/read?api_id=${id}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    });
    const json = await res.json()
    if (!json.league) throw new Error("lib/storage.ts  fetchTeams error")

    cb(json.league)
}



// ---------------------------------------------
// TEAMS
// ---------------------------------------------
export const fetchLeagueTeams = async (league_api_id: Number, cb: React.Dispatch<React.SetStateAction<IStorageTeam[]>>) => {
    const res = await fetch(`/api/football/team/list?league=${league_api_id}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    });
    const json = await res.json()
    console.log(json)
    if (!json.teams) throw new Error("lib/storage.ts  fetchLeagueTeams error")

    cb(json.teams)
}


export const isStorageTeam = (team: ITeam, storageTeams) => storageTeams?.map(item => String(item.api_id)).includes(String(team.id))

const isITeam = (team: any): team is ITeam => true
const isIStorageTeam = (team: any): team is IStorageTeam => true