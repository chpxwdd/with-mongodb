export interface RootObject {
    errors: any[];
    get: string;
    paging: Paging;
    parameters: any[];
    response: number[];
    results: number;
}

export interface Paging {
    current: number;
    total: number;
}
