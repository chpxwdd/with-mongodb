import {FOOTBALL_API_BASEURL} from "@/constants/rapid-api"

export interface IInputHeadToHead {
    h2h: string
    optional?: {
        date?: Date // 'YYYY-MM-DD
        league?: number
        season?: number
        last?: number
        from?: Date
        to?: Date
        venue?: number
        status?: string
        timezone?: string
    }
}

export interface IInputFixtures {
    league?: number
    season?: number
    team?: number
    id?: number
    live?: string // | EFixtureLive.ALL
    date?: Date
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

export const fetchFixtures = (inputProps: IInputFixtures) => {
    // const {} = inputProps
    const query = Object.keys(inputProps).map(key => `${key}=${inputProps[key]}`)
    console.log("fetch Fixture query: ", query)
    const url = String(FOOTBALL_API_BASEURL).concat("/fixtures").concat('?').concat(query.join("&"))
    console.log("URL", url);


}