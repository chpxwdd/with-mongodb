export enum EFixtureLive {
    ALL = 'all'
}

export interface IInputFixtures {
    id?: number
    live?: string // | EFixtureLive.ALL
    date?: Date
    league?: number
    season?: number
    team?: number
    last?: number
    next?: number
    from?: Date
    to?: Date
    round?: string
    timezone?: string
    status?: string
    venue?: number
    ids?: string // id-id-id
}