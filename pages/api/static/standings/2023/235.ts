import clientPromise from "@/lib/mongodb";
import {NextApiRequest, NextApiResponse} from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        res.json({response})
    } catch (e) {console.error(e)}
}


const response = {
    "get": "standings",
    "parameters": {
        "league": "235",
        "season": "2023"
    },
    "errors": [],
    "results": 1,
    "paging": {
        "current": 1,
        "total": 1
    },
    "response": [
        {
            "league": {
                "id": 235,
                "name": "Premier League",
                "country": "Russia",
                "logo": "https://media-4.api-sports.io/football/leagues/235.png",
                "flag": "https://media-4.api-sports.io/flags/ru.svg",
                "season": 2023,
                "standings": [
                    [
                        {
                            "rank": 1,
                            "team": {
                                "id": 621,
                                "name": "Krasnodar",
                                "logo": "https://media-4.api-sports.io/football/teams/621.png"
                            },
                            "points": 21,
                            "goalsDiff": 11,
                            "group": "Premier League",
                            "form": "WDWDD",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 9,
                                "win": 6,
                                "draw": 3,
                                "lose": 0,
                                "goals": {
                                    "for": 14,
                                    "against": 3
                                }
                            },
                            "home": {
                                "played": 5,
                                "win": 4,
                                "draw": 1,
                                "lose": 0,
                                "goals": {
                                    "for": 8,
                                    "against": 1
                                }
                            },
                            "away": {
                                "played": 4,
                                "win": 2,
                                "draw": 2,
                                "lose": 0,
                                "goals": {
                                    "for": 6,
                                    "against": 2
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 2,
                            "team": {
                                "id": 1079,
                                "name": "Krylya Sovetov",
                                "logo": "https://media-4.api-sports.io/football/teams/1079.png"
                            },
                            "points": 18,
                            "goalsDiff": 9,
                            "group": "Premier League",
                            "form": "WDWWL",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 9,
                                "win": 5,
                                "draw": 3,
                                "lose": 1,
                                "goals": {
                                    "for": 21,
                                    "against": 12
                                }
                            },
                            "home": {
                                "played": 5,
                                "win": 4,
                                "draw": 1,
                                "lose": 0,
                                "goals": {
                                    "for": 15,
                                    "against": 6
                                }
                            },
                            "away": {
                                "played": 4,
                                "win": 1,
                                "draw": 2,
                                "lose": 1,
                                "goals": {
                                    "for": 6,
                                    "against": 6
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 3,
                            "team": {
                                "id": 596,
                                "name": "Zenit Saint Petersburg",
                                "logo": "https://media-4.api-sports.io/football/teams/596.png"
                            },
                            "points": 17,
                            "goalsDiff": 11,
                            "group": "Premier League",
                            "form": "LWDWW",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 9,
                                "win": 5,
                                "draw": 2,
                                "lose": 2,
                                "goals": {
                                    "for": 19,
                                    "against": 8
                                }
                            },
                            "home": {
                                "played": 4,
                                "win": 2,
                                "draw": 0,
                                "lose": 2,
                                "goals": {
                                    "for": 9,
                                    "against": 5
                                }
                            },
                            "away": {
                                "played": 5,
                                "win": 3,
                                "draw": 2,
                                "lose": 0,
                                "goals": {
                                    "for": 10,
                                    "against": 3
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 4,
                            "team": {
                                "id": 558,
                                "name": "Spartak Moscow",
                                "logo": "https://media-4.api-sports.io/football/teams/558.png"
                            },
                            "points": 16,
                            "goalsDiff": 2,
                            "group": "Premier League",
                            "form": "WWLDL",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 9,
                                "win": 5,
                                "draw": 1,
                                "lose": 3,
                                "goals": {
                                    "for": 14,
                                    "against": 12
                                }
                            },
                            "home": {
                                "played": 6,
                                "win": 4,
                                "draw": 1,
                                "lose": 1,
                                "goals": {
                                    "for": 8,
                                    "against": 6
                                }
                            },
                            "away": {
                                "played": 3,
                                "win": 1,
                                "draw": 0,
                                "lose": 2,
                                "goals": {
                                    "for": 6,
                                    "against": 6
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 5,
                            "team": {
                                "id": 1088,
                                "name": "Dinamo Moscow",
                                "logo": "https://media-4.api-sports.io/football/teams/1088.png"
                            },
                            "points": 15,
                            "goalsDiff": 2,
                            "group": "Premier League",
                            "form": "LDWDW",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 9,
                                "win": 4,
                                "draw": 3,
                                "lose": 2,
                                "goals": {
                                    "for": 16,
                                    "against": 14
                                }
                            },
                            "home": {
                                "played": 4,
                                "win": 2,
                                "draw": 1,
                                "lose": 1,
                                "goals": {
                                    "for": 6,
                                    "against": 5
                                }
                            },
                            "away": {
                                "played": 5,
                                "win": 2,
                                "draw": 2,
                                "lose": 1,
                                "goals": {
                                    "for": 10,
                                    "against": 9
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 6,
                            "team": {
                                "id": 597,
                                "name": "Lokomotiv Moscow",
                                "logo": "https://media-4.api-sports.io/football/teams/597.png"
                            },
                            "points": 15,
                            "goalsDiff": 1,
                            "group": "Premier League",
                            "form": "WLWWD",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 9,
                                "win": 4,
                                "draw": 3,
                                "lose": 2,
                                "goals": {
                                    "for": 15,
                                    "against": 14
                                }
                            },
                            "home": {
                                "played": 4,
                                "win": 1,
                                "draw": 2,
                                "lose": 1,
                                "goals": {
                                    "for": 6,
                                    "against": 7
                                }
                            },
                            "away": {
                                "played": 5,
                                "win": 3,
                                "draw": 1,
                                "lose": 1,
                                "goals": {
                                    "for": 9,
                                    "against": 7
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 7,
                            "team": {
                                "id": 2011,
                                "name": "Nizhny Novgorod",
                                "logo": "https://media-4.api-sports.io/football/teams/2011.png"
                            },
                            "points": 14,
                            "goalsDiff": 1,
                            "group": "Premier League",
                            "form": "WDWWL",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 9,
                                "win": 4,
                                "draw": 2,
                                "lose": 3,
                                "goals": {
                                    "for": 9,
                                    "against": 8
                                }
                            },
                            "home": {
                                "played": 5,
                                "win": 4,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 8,
                                    "against": 4
                                }
                            },
                            "away": {
                                "played": 4,
                                "win": 0,
                                "draw": 2,
                                "lose": 2,
                                "goals": {
                                    "for": 1,
                                    "against": 4
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 8,
                            "team": {
                                "id": 1084,
                                "name": "Ural",
                                "logo": "https://media-4.api-sports.io/football/teams/1084.png"
                            },
                            "points": 14,
                            "goalsDiff": -2,
                            "group": "Premier League",
                            "form": "LDLLW",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 9,
                                "win": 4,
                                "draw": 2,
                                "lose": 3,
                                "goals": {
                                    "for": 8,
                                    "against": 10
                                }
                            },
                            "home": {
                                "played": 5,
                                "win": 2,
                                "draw": 2,
                                "lose": 1,
                                "goals": {
                                    "for": 5,
                                    "against": 4
                                }
                            },
                            "away": {
                                "played": 4,
                                "win": 2,
                                "draw": 0,
                                "lose": 2,
                                "goals": {
                                    "for": 3,
                                    "against": 6
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 9,
                            "team": {
                                "id": 555,
                                "name": "CSKA Moscow",
                                "logo": "https://media-4.api-sports.io/football/teams/555.png"
                            },
                            "points": 13,
                            "goalsDiff": 4,
                            "group": "Premier League",
                            "form": "DDDDL",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 9,
                                "win": 3,
                                "draw": 4,
                                "lose": 2,
                                "goals": {
                                    "for": 19,
                                    "against": 15
                                }
                            },
                            "home": {
                                "played": 4,
                                "win": 2,
                                "draw": 2,
                                "lose": 0,
                                "goals": {
                                    "for": 10,
                                    "against": 5
                                }
                            },
                            "away": {
                                "played": 5,
                                "win": 1,
                                "draw": 2,
                                "lose": 2,
                                "goals": {
                                    "for": 9,
                                    "against": 10
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 10,
                            "team": {
                                "id": 1085,
                                "name": "Akhmat Grozny",
                                "logo": "https://media-4.api-sports.io/football/teams/1085.png"
                            },
                            "points": 11,
                            "goalsDiff": 1,
                            "group": "Premier League",
                            "form": "LDWDW",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 9,
                                "win": 3,
                                "draw": 2,
                                "lose": 4,
                                "goals": {
                                    "for": 11,
                                    "against": 10
                                }
                            },
                            "home": {
                                "played": 4,
                                "win": 1,
                                "draw": 1,
                                "lose": 2,
                                "goals": {
                                    "for": 8,
                                    "against": 6
                                }
                            },
                            "away": {
                                "played": 5,
                                "win": 2,
                                "draw": 1,
                                "lose": 2,
                                "goals": {
                                    "for": 3,
                                    "against": 4
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 11,
                            "team": {
                                "id": 779,
                                "name": "FC Rostov",
                                "logo": "https://media-4.api-sports.io/football/teams/779.png"
                            },
                            "points": 9,
                            "goalsDiff": -6,
                            "group": "Premier League",
                            "form": "DDLLL",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 9,
                                "win": 2,
                                "draw": 3,
                                "lose": 4,
                                "goals": {
                                    "for": 13,
                                    "against": 19
                                }
                            },
                            "home": {
                                "played": 5,
                                "win": 2,
                                "draw": 2,
                                "lose": 1,
                                "goals": {
                                    "for": 10,
                                    "against": 7
                                }
                            },
                            "away": {
                                "played": 4,
                                "win": 0,
                                "draw": 1,
                                "lose": 3,
                                "goals": {
                                    "for": 3,
                                    "against": 12
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 12,
                            "team": {
                                "id": 1083,
                                "name": "Rubin",
                                "logo": "https://media-4.api-sports.io/football/teams/1083.png"
                            },
                            "points": 9,
                            "goalsDiff": -8,
                            "group": "Premier League",
                            "form": "WLLDW",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 9,
                                "win": 2,
                                "draw": 3,
                                "lose": 4,
                                "goals": {
                                    "for": 10,
                                    "against": 18
                                }
                            },
                            "home": {
                                "played": 5,
                                "win": 1,
                                "draw": 2,
                                "lose": 2,
                                "goals": {
                                    "for": 6,
                                    "against": 11
                                }
                            },
                            "away": {
                                "played": 4,
                                "win": 1,
                                "draw": 1,
                                "lose": 2,
                                "goals": {
                                    "for": 4,
                                    "against": 7
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 13,
                            "team": {
                                "id": 1080,
                                "name": "Orenburg",
                                "logo": "https://media-4.api-sports.io/football/teams/1080.png"
                            },
                            "points": 8,
                            "goalsDiff": -6,
                            "group": "Premier League",
                            "form": "LWWDL",
                            "status": "same",
                            "description": "Premier League (Relegation)",
                            "all": {
                                "played": 9,
                                "win": 2,
                                "draw": 2,
                                "lose": 5,
                                "goals": {
                                    "for": 10,
                                    "against": 16
                                }
                            },
                            "home": {
                                "played": 4,
                                "win": 1,
                                "draw": 1,
                                "lose": 2,
                                "goals": {
                                    "for": 4,
                                    "against": 5
                                }
                            },
                            "away": {
                                "played": 5,
                                "win": 1,
                                "draw": 1,
                                "lose": 3,
                                "goals": {
                                    "for": 6,
                                    "against": 11
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 14,
                            "team": {
                                "id": 2006,
                                "name": "Baltika",
                                "logo": "https://media-4.api-sports.io/football/teams/2006.png"
                            },
                            "points": 7,
                            "goalsDiff": -6,
                            "group": "Premier League",
                            "form": "WDLLL",
                            "status": "same",
                            "description": "Premier League (Relegation)",
                            "all": {
                                "played": 9,
                                "win": 2,
                                "draw": 1,
                                "lose": 6,
                                "goals": {
                                    "for": 9,
                                    "against": 15
                                }
                            },
                            "home": {
                                "played": 4,
                                "win": 2,
                                "draw": 1,
                                "lose": 1,
                                "goals": {
                                    "for": 5,
                                    "against": 4
                                }
                            },
                            "away": {
                                "played": 5,
                                "win": 0,
                                "draw": 0,
                                "lose": 5,
                                "goals": {
                                    "for": 4,
                                    "against": 11
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 15,
                            "team": {
                                "id": 2012,
                                "name": "PFC Sochi",
                                "logo": "https://media-4.api-sports.io/football/teams/2012.png"
                            },
                            "points": 6,
                            "goalsDiff": -5,
                            "group": "Premier League",
                            "form": "LLLLW",
                            "status": "same",
                            "description": "Relegation - FNL",
                            "all": {
                                "played": 9,
                                "win": 2,
                                "draw": 0,
                                "lose": 7,
                                "goals": {
                                    "for": 9,
                                    "against": 14
                                }
                            },
                            "home": {
                                "played": 4,
                                "win": 2,
                                "draw": 0,
                                "lose": 2,
                                "goals": {
                                    "for": 7,
                                    "against": 3
                                }
                            },
                            "away": {
                                "played": 5,
                                "win": 0,
                                "draw": 0,
                                "lose": 5,
                                "goals": {
                                    "for": 2,
                                    "against": 11
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 16,
                            "team": {
                                "id": 1993,
                                "name": "Fakel Voronezh",
                                "logo": "https://media-4.api-sports.io/football/teams/1993.png"
                            },
                            "points": 5,
                            "goalsDiff": -9,
                            "group": "Premier League",
                            "form": "LDLDW",
                            "status": "same",
                            "description": "Relegation - FNL",
                            "all": {
                                "played": 9,
                                "win": 1,
                                "draw": 2,
                                "lose": 6,
                                "goals": {
                                    "for": 5,
                                    "against": 14
                                }
                            },
                            "home": {
                                "played": 4,
                                "win": 1,
                                "draw": 1,
                                "lose": 2,
                                "goals": {
                                    "for": 3,
                                    "against": 5
                                }
                            },
                            "away": {
                                "played": 5,
                                "win": 0,
                                "draw": 1,
                                "lose": 4,
                                "goals": {
                                    "for": 2,
                                    "against": 9
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        }
                    ]
                ]
            }
        }
    ]
}