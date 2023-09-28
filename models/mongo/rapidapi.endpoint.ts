import {ICountry, ILeague, ISeason, ITeam} from "./raidapi.types";

export enum EFootballAPIEndpoints {
	PLAYERS = 'players',
	COUNTRIES = 'countries',
	LEAGUES = 'countries/league',
	FIXTURES = 'fixtures'
}
export interface IServerResponse {
	data: {
		countries?: ICountry[] | [],
		country?: ICountry | null,
		leagues?: ILeague[] | [],
		league?: ILeague | null,
		seasons?: ISeason[] | [],
		season?: ISeason | null,
		teams?: ITeam[] | [],
		team?: ITeam | null
	}
}