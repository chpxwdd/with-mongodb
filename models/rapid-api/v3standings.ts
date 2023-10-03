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
    league: string;
    season: string;
}

export interface Response {
    league: League;
}

export interface League {
    country: string;
    flag: string;
    id: number;
    logo: string;
    name: string;
    season: number;
    standings: Array<Standing[]>;
}

export interface Standing {
    all: All;
    away: All;
    description: null | string;
    form: string;
    goalsDiff: number;
    group: string;
    home: All;
    points: number;
    rank: number;
    status: string;
    team: Team;
    update: string;
}

export interface All {
    draw: number;
    goals: Goals;
    lose: number;
    played: number;
    win: number;
}

export interface Goals {
    against: number;
    for: number;
}


export interface Team {
    id: number;
    logo: string;
    name: string;
}
