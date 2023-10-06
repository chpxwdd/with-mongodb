import {ELeagueType} from '@/models/mongo/storage.types'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	COUNTRY_CODE: 'RU',
	LEAGUE_ID: 663,
	SEASON_YEAR: new Date().getFullYear(),
	TEAM_ID: 558,
	COUNTRY: {
		_id: '64fcaa1c0c01f7f27274c169',
		code: 'RU',
		name: 'Russia',
		flag: 'https://media-2.api-sports.io/flags/ru.svg',
	},
	LEAGUE: {
		_id: '64fcb9ad5c112cbb3d552ccf',
		api_id: 235,
		name: 'Premier League',
		logo: 'https://media-3.api-sports.io/football/leagues/235.png',
		type: ELeagueType.LEAGUE,
		country: '64fcaa1c0c01f7f27274c169',
	},
	SEASON: {
		_id: '',
		year: 2023,
		start: '2023-07-23',
		end: '2024-05-25',
		current: true,
		league: '',
	},
	TEAM: {
		_id: '',
		api_id: 558,
		name: 'Spartak Moscow',
		logo: 'https://media-3.api-sports.io/football/teams/558.png',
		league: []
	},
	FAVORITES: {
		_id: '65103d437b0df7be9d3b265c',
		user: '5cc3161a854ece2dc8f5e734',
		countries: [],
		leagues: [],
		seasons: [],
		teams: [],
	},
}

export const requestOptions = {
	method: 'POST',
	headers: {'Content-Type': 'application/json', Accept: 'application/json'},
}
