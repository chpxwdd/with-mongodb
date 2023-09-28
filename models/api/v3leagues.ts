export interface RootObject {
    errors: any[];
    get: string;
    paging: Paging;
    parameters: Parameters;
    response: Response[];
    results: number;
}

export interface Paging {
    current: number;
    total: number;
}

export interface Parameters {
    id?: string;
}

export interface Response {
    country: Country;
    league: League;
    seasons: Season[];
}

export interface Country {
    code: string;
    flag: string;
    name: string;
}

export interface League {
    id: number;
    logo: string;
    name: string;
    type: string;
}

export interface Season {
    coverage: Coverage;
    current: boolean;
    end: string;
    start: string;
    year: number;
}

export interface Coverage {
    fixtures: Fixtures;
    injuries: boolean;
    odds: boolean;
    players: boolean;
    predictions: boolean;
    standings: boolean;
    top_assists: boolean;
    top_cards: boolean;
    top_scorers: boolean;
}

export interface Fixtures {
    events: boolean;
    lineups: boolean;
    statistics_fixtures: boolean;
    statistics_players: boolean;
}
