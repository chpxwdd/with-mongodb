export interface ICountry {
    code: null | string,
    flag: null | string
    name: string,
}


export interface ILeague {
    id: number;
    logo: string;
    name: string;
    type: string;
}

export interface ISeason {
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


export interface ITeam {
    id: number;
    logo: string;
    name: string;
}
export interface ICountryLeagueSeason {
    country: ICountry;
    league: ILeague;
    seasons: ISeason[]
}



export interface IRapidStanding {

}