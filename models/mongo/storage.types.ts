
export interface IStorageUser {
    _id: string
    email: string
    username: string
    roles: string[]
    date?: string
    password?: string
}

export interface IStorageCountry {
    _id?: string
    __v?: number
    code: string,
    flag: string
    name: string,
}

export enum ELeagueType {
    CUP = "Cup",
    LEAGUE = "League"
}

export interface IStorageLeague {
    _id?: string
    __v?: number
    api_id: number
    logo: string
    name: string
    type: ELeagueType
    country?: string
}

export interface IStorageSeason {
    _id?: string
    __v?: number
    current: boolean;
    end: string;
    start: string;
    year: number;
}

export interface IStorageTeam {
    _id?: string
    __v?: number
    api_id: number;
    logo: string;
    name: string;
    league: number[]
}
export interface IStorageCountryLeagueSeason {
    country: IStorageCountry;
    league: IStorageLeague;
    seasons: IStorageSeason[]
}

export interface IStorageFavorite {
    _id: string,
    _user_id: string,
    countries: string[]
    leagues: string[]
    seasons: string[]
    teams: string[]
    // countries: IStorageCountry[]
    // leagues: IStorageLeague[]
    // seasons: IStorageSeason[]
    // teams: IStorageTeam[]

}