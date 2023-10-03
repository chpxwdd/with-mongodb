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
    season: string;
    team: string;
}

export interface Response {
    fixture: Fixture;
    goals: Goals;
    league: League;
    score: Score;
    teams: {
        home: {
            id: number;
            logo: string;
            name: string;
            winner: boolean | null;
        }
        away: {
            id: number;
            logo: string;
            name: string;
            winner: boolean | null;
        }
    };
}

export interface Fixture {
    date: string;
    id: number;
    periods: Periods;
    referee: null | string;
    status: Status;
    timestamp: number;
    timezone: string;
    venue: Venue;
}

export interface Periods {
    first: number | null;
    second: number | null;
}

export interface Status {
    elapsed: number | null;
    long: string;
    short: string;
}


export interface Venue {
    city: null | string;
    id: number | null;
    name: null | string;
}

export interface Goals {
    away: number | null;
    home: number | null;
}



export interface League {
    country: string;
    flag: null | string;
    id: number;
    logo: string;
    name: string;
    round: string;
    season: number;
}


export interface Score {
    extratime: Goals;
    fulltime: Goals;
    halftime: Goals;
    penalty: Goals;
}
