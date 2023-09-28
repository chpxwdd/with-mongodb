export enum EStorageFavorite {
    COUNTRY = "countries",
    LEAGUE = "leagues",
    SEASON = "seasons",
    TEAM = "teams"
}

export enum EStogageMethod {
    GET = 'GET',
    POST = 'POST'
}

export enum EStorageCollection {
    USER = 'CoreUser',
    ROLE = 'CoreRole',
    FAVORITE = 'FootballFavorite',
    COUNTRY = 'FootballCountry',
    LEAGUE = 'FootballLeague',
    SEASON = 'FootballSeason',
    TEAM = 'FootballTeam'
}

export enum EStorageEndpoint {
    COUNTRY = '/api/football/country',
    COUNTRIES = '/api/football/counties',
    LEAGUE = '/api/football/league',
    LEAGUES = '/api/football/counties',
    SEASON = '/api/football/season',
    SEASONS = '/api/football/seasons',
    FAV_COUNTRIES = '/api/football/favorite/countries',
    FAV_LEAGUES = '/api/football/favorite/leagues',
    FAV_SEASONS = '/api/football/favorite/seasons',
    FAV_TEAMS = '/api/football/favorite/teams',
    USER_FAVORITE = '/api/football/favorite/user',
    USER_SIGN_IN = '/api/auth',
    USER_SIGN_UP = '/api/auth/register',
    USER = '/api/core/user',
    USERS = '/api/core/users',
    ROLE = '/api/core/role',
    ROLES = '/api/core/roles',
}