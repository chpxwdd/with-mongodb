
export interface IStorageUser {
    _id: string
    email: string
    username: string
    roles: string[]
    date?: string
    password?: string
}

export interface IStorageCountry {
    _id: string
    code: string,
    flag: string
    name: string,
    __v?: number
}

export enum ELeagueType {
    CUP = "Cup",
    LEAGUE = "League"
}

export interface IStorageLeague {
    _id: string
    api_id: number
    logo: string
    name: string
    type: ELeagueType
    country?: string
    __v?: number
}

export interface IStorageSeason {
    _id: string
    current: boolean;
    end: string;
    start: string;
    year: number;
    __v?: number
}

export interface IStorageTeam {
    _id: string
    api_id: number;
    logo: string;
    name: string;
    __v?: number
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