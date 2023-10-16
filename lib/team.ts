import {IRapidTeam} from "@/models/mongo/rapid-api.types";

interface IStorageCompetion {
    league_api_id: number,
    year: number
}
interface IStorageTeam {
    _id: string,
    api_id: number,
    name: string,
    logo: string,
    competition: IStorageCompetion[]
}
const teamsInsertMany = async (teams: IRapidTeam, year: number, leagueApiId: number) => {

    // team data


    const res = await fetch(`/api/football/team/league/add`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({teams, league: leagueApiId, year})
    })

}