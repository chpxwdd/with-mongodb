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
    page: string;
    season: string;
    team: string;
}

export interface Response {
    player: Player;
    statistics: Statistic[];
}

export interface Player {
    age: number;
    birth: Birth;
    firstname: string;
    height: null | string;
    id: number;
    injured: boolean;
    lastname: string;
    name: string;
    nationality: string;
    photo: string;
    weight: null | string;
}

export interface Birth {
    country: string;
    date: string;
    place: null | string;
}


export interface Statistic {
    cards: Cards;
    dribbles: Dribbles;
    duels: Duels;
    fouls: Fouls;
    games: Games;
    goals: Goals;
    league: League;
    passes: Passes;
    penalty: Penalty;
    shots: Shots;
    substitutes: Substitutes;
    tackles: Tackles;
    team: Team;
}

export interface Cards {
    red: number;
    yellow: number;
    yellowred: number;
}

export interface Dribbles {
    attempts: number | null;
    past: null;
    success: number | null;
}

export interface Duels {
    total: number | null;
    won: number | null;
}

export interface Fouls {
    committed: number | null;
    drawn: number | null;
}

export interface Games {
    appearences: number;
    captain: boolean;
    lineups: number;
    minutes: number;
    number: null;
    position: string;
    rating: null | string;
}

export interface Goals {
    assists: number | null;
    conceded: number | null;
    saves: number | null;
    total: number;
}

export interface League {
    country: string;
    flag: string;
    id: number;
    logo: string;
    name: string;
    season: number;
}

export interface Passes {
    accuracy: number | null;
    key: number | null;
    total: number | null;
}

export interface Penalty {
    commited: null;
    missed: number | null;
    saved: number | null;
    scored: number | null;
    won: null;
}

export interface Shots {
    on: number | null;
    total: number | null;
}

export interface Substitutes {
    bench: number;
    in: number;
    out: number;
}

export interface Tackles {
    blocks: number | null;
    interceptions: number | null;
    total: number | null;
}

export interface Team {
    id: number;
    logo: string;
    name: string;
}

