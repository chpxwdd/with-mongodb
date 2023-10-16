import {FOOTBALL_API_BASEURL, FOOTBALL_API_RPM, X_RAPID_API_HEADERS} from "@/constants/rapid-api"

export interface IInputStandings {
    league: number,
    season: number
}


export const fetchStandings = async (inputProps: IInputStandings) => {

    console.log("fetch standing for league/season :", String(inputProps.league) + "/" + String(inputProps.season))

    const query = Object.keys(inputProps).map(key => `${key}=${inputProps[key]}`).join('&')

    const url = String(FOOTBALL_API_BASEURL)
        .concat('/standings')
        .concat('?')
        .concat(query)

    // const controller = new AbortController()
    // const timeout = Math.round(60 * 1000 / FOOTBALL_API_RPM)
    // console.log("timeout", timeout)
    // const id = setTimeout(() => controller.abort(), timeout)
    //
    // actions
    //
    // clearTimeout(id)

    const res = await fetch(url, {
        method: 'GET',
        headers: X_RAPID_API_HEADERS
    })


    const json = await res.json()

    return json.response[0]

}