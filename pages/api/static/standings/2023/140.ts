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
        "league": "140",
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
                "id": 140,
                "name": "La Liga",
                "country": "Spain",
                "logo": "https://media-4.api-sports.io/football/leagues/140.png",
                "flag": "https://media-4.api-sports.io/flags/es.svg",
                "season": 2023,
                "standings": [
                    [
                        {
                            "rank": 1,
                            "team": {
                                "id": 547,
                                "name": "Girona",
                                "logo": "https://media-4.api-sports.io/football/teams/547.png"
                            },
                            "points": 19,
                            "goalsDiff": 10,
                            "group": "Primera División",
                            "form": "WWWWW",
                            "status": "same",
                            "description": "Promotion - Champions League (Group Stage: )",
                            "all": {
                                "played": 7,
                                "win": 6,
                                "draw": 1,
                                "lose": 0,
                                "goals": {
                                    "for": 18,
                                    "against": 8
                                }
                            },
                            "home": {
                                "played": 3,
                                "win": 3,
                                "draw": 0,
                                "lose": 0,
                                "goals": {
                                    "for": 9,
                                    "against": 3
                                }
                            },
                            "away": {
                                "played": 4,
                                "win": 3,
                                "draw": 1,
                                "lose": 0,
                                "goals": {
                                    "for": 9,
                                    "against": 5
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 2,
                            "team": {
                                "id": 541,
                                "name": "Real Madrid",
                                "logo": "https://media-4.api-sports.io/football/teams/541.png"
                            },
                            "points": 18,
                            "goalsDiff": 7,
                            "group": "Primera División",
                            "form": "WLWWW",
                            "status": "same",
                            "description": "Promotion - Champions League (Group Stage: )",
                            "all": {
                                "played": 7,
                                "win": 6,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 13,
                                    "against": 6
                                }
                            },
                            "home": {
                                "played": 3,
                                "win": 3,
                                "draw": 0,
                                "lose": 0,
                                "goals": {
                                    "for": 6,
                                    "against": 2
                                }
                            },
                            "away": {
                                "played": 4,
                                "win": 3,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 7,
                                    "against": 4
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 3,
                            "team": {
                                "id": 529,
                                "name": "Barcelona",
                                "logo": "https://media-4.api-sports.io/football/teams/529.png"
                            },
                            "points": 17,
                            "goalsDiff": 10,
                            "group": "Primera División",
                            "form": "DWWWW",
                            "status": "same",
                            "description": "Promotion - Champions League (Group Stage: )",
                            "all": {
                                "played": 7,
                                "win": 5,
                                "draw": 2,
                                "lose": 0,
                                "goals": {
                                    "for": 18,
                                    "against": 8
                                }
                            },
                            "home": {
                                "played": 3,
                                "win": 3,
                                "draw": 0,
                                "lose": 0,
                                "goals": {
                                    "for": 10,
                                    "against": 2
                                }
                            },
                            "away": {
                                "played": 4,
                                "win": 2,
                                "draw": 2,
                                "lose": 0,
                                "goals": {
                                    "for": 8,
                                    "against": 6
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 4,
                            "team": {
                                "id": 531,
                                "name": "Athletic Club",
                                "logo": "https://media-4.api-sports.io/football/teams/531.png"
                            },
                            "points": 14,
                            "goalsDiff": 7,
                            "group": "Primera División",
                            "form": "DWWDW",
                            "status": "same",
                            "description": "Promotion - Champions League (Group Stage: )",
                            "all": {
                                "played": 7,
                                "win": 4,
                                "draw": 2,
                                "lose": 1,
                                "goals": {
                                    "for": 13,
                                    "against": 6
                                }
                            },
                            "home": {
                                "played": 4,
                                "win": 2,
                                "draw": 1,
                                "lose": 1,
                                "goals": {
                                    "for": 9,
                                    "against": 6
                                }
                            },
                            "away": {
                                "played": 3,
                                "win": 2,
                                "draw": 1,
                                "lose": 0,
                                "goals": {
                                    "for": 4,
                                    "against": 0
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 5,
                            "team": {
                                "id": 530,
                                "name": "Atletico Madrid",
                                "logo": "https://media-4.api-sports.io/football/teams/530.png"
                            },
                            "points": 13,
                            "goalsDiff": 10,
                            "group": "Primera División",
                            "form": "WWLWD",
                            "status": "same",
                            "description": "Promotion - Europa League (Group Stage: )",
                            "all": {
                                "played": 6,
                                "win": 4,
                                "draw": 1,
                                "lose": 1,
                                "goals": {
                                    "for": 15,
                                    "against": 5
                                }
                            },
                            "home": {
                                "played": 2,
                                "win": 2,
                                "draw": 0,
                                "lose": 0,
                                "goals": {
                                    "for": 6,
                                    "against": 2
                                }
                            },
                            "away": {
                                "played": 4,
                                "win": 2,
                                "draw": 1,
                                "lose": 1,
                                "goals": {
                                    "for": 9,
                                    "against": 3
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 6,
                            "team": {
                                "id": 548,
                                "name": "Real Sociedad",
                                "logo": "https://media-4.api-sports.io/football/teams/548.png"
                            },
                            "points": 12,
                            "goalsDiff": 3,
                            "group": "Primera División",
                            "form": "WWLWD",
                            "status": "same",
                            "description": "Promotion - Europa Conference League (Qualification: )",
                            "all": {
                                "played": 7,
                                "win": 3,
                                "draw": 3,
                                "lose": 1,
                                "goals": {
                                    "for": 13,
                                    "against": 10
                                }
                            },
                            "home": {
                                "played": 4,
                                "win": 2,
                                "draw": 2,
                                "lose": 0,
                                "goals": {
                                    "for": 11,
                                    "against": 8
                                }
                            },
                            "away": {
                                "played": 3,
                                "win": 1,
                                "draw": 1,
                                "lose": 1,
                                "goals": {
                                    "for": 2,
                                    "against": 2
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 7,
                            "team": {
                                "id": 728,
                                "name": "Rayo Vallecano",
                                "logo": "https://media-4.api-sports.io/football/teams/728.png"
                            },
                            "points": 11,
                            "goalsDiff": -2,
                            "group": "Primera División",
                            "form": "DDWLL",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 7,
                                "win": 3,
                                "draw": 2,
                                "lose": 2,
                                "goals": {
                                    "for": 7,
                                    "against": 9
                                }
                            },
                            "home": {
                                "played": 3,
                                "win": 1,
                                "draw": 1,
                                "lose": 1,
                                "goals": {
                                    "for": 3,
                                    "against": 8
                                }
                            },
                            "away": {
                                "played": 4,
                                "win": 2,
                                "draw": 1,
                                "lose": 1,
                                "goals": {
                                    "for": 4,
                                    "against": 1
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 8,
                            "team": {
                                "id": 532,
                                "name": "Valencia",
                                "logo": "https://media-4.api-sports.io/football/teams/532.png"
                            },
                            "points": 10,
                            "goalsDiff": 2,
                            "group": "Primera División",
                            "form": "LDWLL",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 7,
                                "win": 3,
                                "draw": 1,
                                "lose": 3,
                                "goals": {
                                    "for": 9,
                                    "against": 7
                                }
                            },
                            "home": {
                                "played": 4,
                                "win": 2,
                                "draw": 0,
                                "lose": 2,
                                "goals": {
                                    "for": 5,
                                    "against": 3
                                }
                            },
                            "away": {
                                "played": 3,
                                "win": 1,
                                "draw": 1,
                                "lose": 1,
                                "goals": {
                                    "for": 4,
                                    "against": 4
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 9,
                            "team": {
                                "id": 724,
                                "name": "Cadiz",
                                "logo": "https://media-4.api-sports.io/football/teams/724.png"
                            },
                            "points": 9,
                            "goalsDiff": -2,
                            "group": "Primera División",
                            "form": "DDLWD",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 7,
                                "win": 2,
                                "draw": 3,
                                "lose": 2,
                                "goals": {
                                    "for": 6,
                                    "against": 8
                                }
                            },
                            "home": {
                                "played": 4,
                                "win": 2,
                                "draw": 2,
                                "lose": 0,
                                "goals": {
                                    "for": 5,
                                    "against": 2
                                }
                            },
                            "away": {
                                "played": 3,
                                "win": 0,
                                "draw": 1,
                                "lose": 2,
                                "goals": {
                                    "for": 1,
                                    "against": 6
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 10,
                            "team": {
                                "id": 543,
                                "name": "Real Betis",
                                "logo": "https://media-4.api-sports.io/football/teams/543.png"
                            },
                            "points": 9,
                            "goalsDiff": -5,
                            "group": "Primera División",
                            "form": "DDLWL",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 7,
                                "win": 2,
                                "draw": 3,
                                "lose": 2,
                                "goals": {
                                    "for": 7,
                                    "against": 12
                                }
                            },
                            "home": {
                                "played": 3,
                                "win": 1,
                                "draw": 2,
                                "lose": 0,
                                "goals": {
                                    "for": 2,
                                    "against": 1
                                }
                            },
                            "away": {
                                "played": 4,
                                "win": 1,
                                "draw": 1,
                                "lose": 2,
                                "goals": {
                                    "for": 5,
                                    "against": 11
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 11,
                            "team": {
                                "id": 546,
                                "name": "Getafe",
                                "logo": "https://media-4.api-sports.io/football/teams/546.png"
                            },
                            "points": 8,
                            "goalsDiff": -3,
                            "group": "Primera División",
                            "form": "DLWLW",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 7,
                                "win": 2,
                                "draw": 2,
                                "lose": 3,
                                "goals": {
                                    "for": 10,
                                    "against": 13
                                }
                            },
                            "home": {
                                "played": 3,
                                "win": 2,
                                "draw": 1,
                                "lose": 0,
                                "goals": {
                                    "for": 4,
                                    "against": 2
                                }
                            },
                            "away": {
                                "played": 4,
                                "win": 0,
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
                            "rank": 12,
                            "team": {
                                "id": 536,
                                "name": "Sevilla",
                                "logo": "https://media-4.api-sports.io/football/teams/536.png"
                            },
                            "points": 7,
                            "goalsDiff": 2,
                            "group": "Primera División",
                            "form": "WDWLL",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 6,
                                "win": 2,
                                "draw": 1,
                                "lose": 3,
                                "goals": {
                                    "for": 11,
                                    "against": 9
                                }
                            },
                            "home": {
                                "played": 4,
                                "win": 2,
                                "draw": 0,
                                "lose": 2,
                                "goals": {
                                    "for": 8,
                                    "against": 5
                                }
                            },
                            "away": {
                                "played": 2,
                                "win": 0,
                                "draw": 1,
                                "lose": 1,
                                "goals": {
                                    "for": 3,
                                    "against": 4
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 13,
                            "team": {
                                "id": 533,
                                "name": "Villarreal",
                                "logo": "https://media-4.api-sports.io/football/teams/533.png"
                            },
                            "points": 7,
                            "goalsDiff": -3,
                            "group": "Primera División",
                            "form": "LDWLL",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 7,
                                "win": 2,
                                "draw": 1,
                                "lose": 4,
                                "goals": {
                                    "for": 10,
                                    "against": 13
                                }
                            },
                            "home": {
                                "played": 4,
                                "win": 1,
                                "draw": 0,
                                "lose": 3,
                                "goals": {
                                    "for": 7,
                                    "against": 9
                                }
                            },
                            "away": {
                                "played": 3,
                                "win": 1,
                                "draw": 1,
                                "lose": 1,
                                "goals": {
                                    "for": 3,
                                    "against": 4
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 14,
                            "team": {
                                "id": 727,
                                "name": "Osasuna",
                                "logo": "https://media-4.api-sports.io/football/teams/727.png"
                            },
                            "points": 7,
                            "goalsDiff": -3,
                            "group": "Primera División",
                            "form": "LDLLW",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 7,
                                "win": 2,
                                "draw": 1,
                                "lose": 4,
                                "goals": {
                                    "for": 7,
                                    "against": 10
                                }
                            },
                            "home": {
                                "played": 4,
                                "win": 0,
                                "draw": 1,
                                "lose": 3,
                                "goals": {
                                    "for": 1,
                                    "against": 6
                                }
                            },
                            "away": {
                                "played": 3,
                                "win": 2,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 6,
                                    "against": 4
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 15,
                            "team": {
                                "id": 542,
                                "name": "Alaves",
                                "logo": "https://media-4.api-sports.io/football/teams/542.png"
                            },
                            "points": 7,
                            "goalsDiff": -4,
                            "group": "Primera División",
                            "form": "DLLWL",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 7,
                                "win": 2,
                                "draw": 1,
                                "lose": 4,
                                "goals": {
                                    "for": 6,
                                    "against": 10
                                }
                            },
                            "home": {
                                "played": 3,
                                "win": 2,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 5,
                                    "against": 5
                                }
                            },
                            "away": {
                                "played": 4,
                                "win": 0,
                                "draw": 1,
                                "lose": 3,
                                "goals": {
                                    "for": 1,
                                    "against": 5
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 16,
                            "team": {
                                "id": 798,
                                "name": "Mallorca",
                                "logo": "https://media-4.api-sports.io/football/teams/798.png"
                            },
                            "points": 6,
                            "goalsDiff": -3,
                            "group": "Primera División",
                            "form": "DLWDL",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 7,
                                "win": 1,
                                "draw": 3,
                                "lose": 3,
                                "goals": {
                                    "for": 9,
                                    "against": 12
                                }
                            },
                            "home": {
                                "played": 3,
                                "win": 0,
                                "draw": 2,
                                "lose": 1,
                                "goals": {
                                    "for": 2,
                                    "against": 3
                                }
                            },
                            "away": {
                                "played": 4,
                                "win": 1,
                                "draw": 1,
                                "lose": 2,
                                "goals": {
                                    "for": 7,
                                    "against": 9
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 17,
                            "team": {
                                "id": 538,
                                "name": "Celta Vigo",
                                "logo": "https://media-4.api-sports.io/football/teams/538.png"
                            },
                            "points": 5,
                            "goalsDiff": -4,
                            "group": "Primera División",
                            "form": "DLLWL",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 7,
                                "win": 1,
                                "draw": 2,
                                "lose": 4,
                                "goals": {
                                    "for": 7,
                                    "against": 11
                                }
                            },
                            "home": {
                                "played": 4,
                                "win": 0,
                                "draw": 1,
                                "lose": 3,
                                "goals": {
                                    "for": 1,
                                    "against": 5
                                }
                            },
                            "away": {
                                "played": 3,
                                "win": 1,
                                "draw": 1,
                                "lose": 1,
                                "goals": {
                                    "for": 6,
                                    "against": 6
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 18,
                            "team": {
                                "id": 534,
                                "name": "Las Palmas",
                                "logo": "https://media-4.api-sports.io/football/teams/534.png"
                            },
                            "points": 5,
                            "goalsDiff": -4,
                            "group": "Primera División",
                            "form": "LWLLD",
                            "status": "same",
                            "description": "Relegation - LaLiga2",
                            "all": {
                                "played": 7,
                                "win": 1,
                                "draw": 2,
                                "lose": 4,
                                "goals": {
                                    "for": 2,
                                    "against": 6
                                }
                            },
                            "home": {
                                "played": 3,
                                "win": 1,
                                "draw": 2,
                                "lose": 0,
                                "goals": {
                                    "for": 2,
                                    "against": 1
                                }
                            },
                            "away": {
                                "played": 4,
                                "win": 0,
                                "draw": 0,
                                "lose": 4,
                                "goals": {
                                    "for": 0,
                                    "against": 5
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 19,
                            "team": {
                                "id": 715,
                                "name": "Granada CF",
                                "logo": "https://media-4.api-sports.io/football/teams/715.png"
                            },
                            "points": 4,
                            "goalsDiff": -8,
                            "group": "Primera División",
                            "form": "DLLLW",
                            "status": "same",
                            "description": "Relegation - LaLiga2",
                            "all": {
                                "played": 7,
                                "win": 1,
                                "draw": 1,
                                "lose": 5,
                                "goals": {
                                    "for": 10,
                                    "against": 18
                                }
                            },
                            "home": {
                                "played": 4,
                                "win": 1,
                                "draw": 1,
                                "lose": 2,
                                "goals": {
                                    "for": 6,
                                    "against": 9
                                }
                            },
                            "away": {
                                "played": 3,
                                "win": 0,
                                "draw": 0,
                                "lose": 3,
                                "goals": {
                                    "for": 4,
                                    "against": 9
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 20,
                            "team": {
                                "id": 723,
                                "name": "Almeria",
                                "logo": "https://media-4.api-sports.io/football/teams/723.png"
                            },
                            "points": 2,
                            "goalsDiff": -10,
                            "group": "Primera División",
                            "form": "LDLLD",
                            "status": "same",
                            "description": "Relegation - LaLiga2",
                            "all": {
                                "played": 7,
                                "win": 0,
                                "draw": 2,
                                "lose": 5,
                                "goals": {
                                    "for": 8,
                                    "against": 18
                                }
                            },
                            "home": {
                                "played": 4,
                                "win": 0,
                                "draw": 1,
                                "lose": 3,
                                "goals": {
                                    "for": 5,
                                    "against": 10
                                }
                            },
                            "away": {
                                "played": 3,
                                "win": 0,
                                "draw": 1,
                                "lose": 2,
                                "goals": {
                                    "for": 3,
                                    "against": 8
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