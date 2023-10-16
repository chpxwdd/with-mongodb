import {ICountry, ILeague, ISeason, IRapidTeam} from "./rapid-api.types";

export enum EFootballAPIEndpoints {
	PLAYERS = 'players',
	COUNTRIES = 'countries',
	LEAGUES = 'countries/league',
	FIXTURES = 'fixtures',
	STANDINGS = 'standings'
}
export interface IServerResponse {
	data: {
		countries?: ICountry[] | [],
		country?: ICountry | null,
		leagues?: ILeague[] | [],
		league?: ILeague | null,
		seasons?: ISeason[] | [],
		season?: ISeason | null,
		teams?: IRapidTeam[] | [],
		team?: IRapidTeam | null
	}
}