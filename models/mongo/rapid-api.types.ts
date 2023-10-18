export interface IRapidCountry {
    code: null | string,
    flag: null | string
    name: string,
}


export interface IRapidLeague {
    id: number;
    logo: string;
    name: string;
    type: string;
}

export interface IRapidSeason {
    coverage: {
        fixtures: {
            events: boolean;
            lineups: boolean;
            statistics_fixtures: boolean;
            statistics_players: boolean;
        };
        injuries: boolean;
        odds: boolean;
        players: boolean;
        predictions: boolean;
        standings: boolean;
        top_assists: boolean;
        top_cards: boolean;
        top_scorers: boolean;
    };
    current: boolean;
    end: string;
    start: string;
    year: number;
}


export interface IRapidTeam {
    id: number;
    logo: string;
    name: string;
}
export interface ICountryLeagueSeason {
    country: IRapidCountry;
    league: IRapidLeague;
    seasons: IRapidSeason[]
}
export interface IRapidCounryLeagueSeason {
    country: IRapidCountry;
    league: IRapidLeague;
    seasons: IRapidSeason[]
}



export interface IRapidStanding {

}
export interface IRapidPlayer {

}
export interface IRapidFixture {

}