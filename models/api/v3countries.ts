export interface RootObject {
    errors: any[];
    get: string;
    paging: Paging;
    parameters: any[];
    response: Response[];
    results: number;
}

export interface Paging {
    current: number;
    total: number;
}

export interface Response {
    code: null | string;
    flag: null | string;
    name: string;
}
