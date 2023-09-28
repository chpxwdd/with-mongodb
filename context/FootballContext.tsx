import * as React from 'react'
import DEFAULT from '@/constants/default'
import {IStorageCountry, IStorageFavorite, IStorageLeague, IStorageSeason, IStorageTeam} from '@/models/mongo/storage.types'

export interface IFootballContext {
    country: IStorageCountry | null
    setCountry: (country: IStorageCountry | null) => void
    league: IStorageLeague
    setLeague: (league: IStorageLeague) => void
    season: IStorageSeason
    setSeason: (league: IStorageSeason) => void
    team: IStorageTeam
    setTeam: (team: IStorageTeam) => void
    favorites: IStorageFavorite | null,
    setFavorites: (favorites: IStorageFavorite | null) => void,
}

let footballInitialContext: IFootballContext = {
    country: DEFAULT.COUNTRY,
    setCountry: () => {},
    league: DEFAULT.LEAGUE,
    setLeague: () => {},
    season: DEFAULT.SEASON,
    setSeason: () => {},
    team: DEFAULT.TEAM,
    setTeam: () => {},
    favorites: null,
    setFavorites: () => {},
}
export const FootballContext = React.createContext<IFootballContext>(footballInitialContext)

export const FootballContextProvider = ({children}: {children: React.ReactNode}) => {

    const [country, setCountry] = React.useState<IStorageCountry>(footballInitialContext.country);
    const [league, setLeague] = React.useState<IStorageLeague>(footballInitialContext.league);
    const [season, setSeason] = React.useState<IStorageSeason>(footballInitialContext.season)
    const [team, setTeam] = React.useState<IStorageTeam>(footballInitialContext.team)
    const [favorites, setFavorites] = React.useState<IStorageFavorite | null>(null)

    return <FootballContext.Provider value={{country, setCountry, league, setLeague, season, setSeason, team, setTeam, favorites, setFavorites}}>{children}</FootballContext.Provider>
}
