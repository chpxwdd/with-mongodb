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
        "league": "135",
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
                "id": 135,
                "name": "Serie A",
                "country": "Italy",
                "logo": "https://media-4.api-sports.io/football/leagues/135.png",
                "flag": "https://media-4.api-sports.io/flags/it.svg",
                "season": 2023,
                "standings": [
                    [
                        {
                            "rank": 1,
                            "team": {
                                "id": 505,
                                "name": "Inter",
                                "logo": "https://media-4.api-sports.io/football/teams/505.png"
                            },
                            "points": 15,
                            "goalsDiff": 12,
                            "group": "Serie A",
                            "form": "LWWWW",
                            "status": "same",
                            "description": "Promotion - Champions League (Group Stage: )",
                            "all": {
                                "played": 6,
                                "win": 5,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 15,
                                    "against": 3
                                }
                            },
                            "home": {
                                "played": 4,
                                "win": 3,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 12,
                                    "against": 3
                                }
                            },
                            "away": {
                                "played": 2,
                                "win": 2,
                                "draw": 0,
                                "lose": 0,
                                "goals": {
                                    "for": 3,
                                    "against": 0
                                }
                            },
                            "update": "2023-09-28T00:00:00+00:00"
                        },
                        {
                            "rank": 2,
                            "team": {
                                "id": 489,
                                "name": "AC Milan",
                                "logo": "https://media-4.api-sports.io/football/teams/489.png"
                            },
                            "points": 15,
                            "goalsDiff": 5,
                            "group": "Serie A",
                            "form": "WWLWW",
                            "status": "same",
                            "description": "Promotion - Champions League (Group Stage: )",
                            "all": {
                                "played": 6,
                                "win": 5,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 13,
                                    "against": 8
                                }
                            },
                            "home": {
                                "played": 2,
                                "win": 2,
                                "draw": 0,
                                "lose": 0,
                                "goals": {
                                    "for": 5,
                                    "against": 1
                                }
                            },
                            "away": {
                                "played": 4,
                                "win": 3,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 8,
                                    "against": 7
                                }
                            },
                            "update": "2023-09-28T00:00:00+00:00"
                        },
                        {
                            "rank": 3,
                            "team": {
                                "id": 496,
                                "name": "Juventus",
                                "logo": "https://media-4.api-sports.io/football/teams/496.png"
                            },
                            "points": 13,
                            "goalsDiff": 6,
                            "group": "Serie A",
                            "form": "WLWWD",
                            "status": "same",
                            "description": "Promotion - Champions League (Group Stage: )",
                            "all": {
                                "played": 6,
                                "win": 4,
                                "draw": 1,
                                "lose": 1,
                                "goals": {
                                    "for": 12,
                                    "against": 6
                                }
                            },
                            "home": {
                                "played": 3,
                                "win": 2,
                                "draw": 1,
                                "lose": 0,
                                "goals": {
                                    "for": 5,
                                    "against": 2
                                }
                            },
                            "away": {
                                "played": 3,
                                "win": 2,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 7,
                                    "against": 4
                                }
                            },
                            "update": "2023-09-28T00:00:00+00:00"
                        },
                        {
                            "rank": 4,
                            "team": {
                                "id": 499,
                                "name": "Atalanta",
                                "logo": "https://media-4.api-sports.io/football/teams/499.png"
                            },
                            "points": 12,
                            "goalsDiff": 6,
                            "group": "Serie A",
                            "form": "WWLWL",
                            "status": "same",
                            "description": "Promotion - Champions League (Group Stage: )",
                            "all": {
                                "played": 6,
                                "win": 4,
                                "draw": 0,
                                "lose": 2,
                                "goals": {
                                    "for": 11,
                                    "against": 5
                                }
                            },
                            "home": {
                                "played": 2,
                                "win": 2,
                                "draw": 0,
                                "lose": 0,
                                "goals": {
                                    "for": 5,
                                    "against": 0
                                }
                            },
                            "away": {
                                "played": 4,
                                "win": 2,
                                "draw": 0,
                                "lose": 2,
                                "goals": {
                                    "for": 6,
                                    "against": 5
                                }
                            },
                            "update": "2023-09-28T00:00:00+00:00"
                        },
                        {
                            "rank": 5,
                            "team": {
                                "id": 492,
                                "name": "Napoli",
                                "logo": "https://media-4.api-sports.io/football/teams/492.png"
                            },
                            "points": 11,
                            "goalsDiff": 6,
                            "group": "Serie A",
                            "form": "WDDLW",
                            "status": "same",
                            "description": "Promotion - Europa League (Group Stage: )",
                            "all": {
                                "played": 6,
                                "win": 3,
                                "draw": 2,
                                "lose": 1,
                                "goals": {
                                    "for": 12,
                                    "against": 6
                                }
                            },
                            "home": {
                                "played": 3,
                                "win": 2,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 7,
                                    "against": 3
                                }
                            },
                            "away": {
                                "played": 3,
                                "win": 1,
                                "draw": 2,
                                "lose": 0,
                                "goals": {
                                    "for": 5,
                                    "against": 3
                                }
                            },
                            "update": "2023-09-28T00:00:00+00:00"
                        },
                        {
                            "rank": 6,
                            "team": {
                                "id": 867,
                                "name": "Lecce",
                                "logo": "https://media-4.api-sports.io/football/teams/867.png"
                            },
                            "points": 11,
                            "goalsDiff": 3,
                            "group": "Serie A",
                            "form": "LWDWD",
                            "status": "same",
                            "description": "Promotion - Europa Conference League (Qualification: )",
                            "all": {
                                "played": 6,
                                "win": 3,
                                "draw": 2,
                                "lose": 1,
                                "goals": {
                                    "for": 8,
                                    "against": 5
                                }
                            },
                            "home": {
                                "played": 3,
                                "win": 3,
                                "draw": 0,
                                "lose": 0,
                                "goals": {
                                    "for": 5,
                                    "against": 1
                                }
                            },
                            "away": {
                                "played": 3,
                                "win": 0,
                                "draw": 2,
                                "lose": 1,
                                "goals": {
                                    "for": 3,
                                    "against": 4
                                }
                            },
                            "update": "2023-09-28T00:00:00+00:00"
                        },
                        {
                            "rank": 7,
                            "team": {
                                "id": 502,
                                "name": "Fiorentina",
                                "logo": "https://media-4.api-sports.io/football/teams/502.png"
                            },
                            "points": 11,
                            "goalsDiff": 2,
                            "group": "Serie A",
                            "form": "DWWLD",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 6,
                                "win": 3,
                                "draw": 2,
                                "lose": 1,
                                "goals": {
                                    "for": 12,
                                    "against": 10
                                }
                            },
                            "home": {
                                "played": 2,
                                "win": 1,
                                "draw": 1,
                                "lose": 0,
                                "goals": {
                                    "for": 5,
                                    "against": 4
                                }
                            },
                            "away": {
                                "played": 4,
                                "win": 2,
                                "draw": 1,
                                "lose": 1,
                                "goals": {
                                    "for": 7,
                                    "against": 6
                                }
                            },
                            "update": "2023-09-28T00:00:00+00:00"
                        },
                        {
                            "rank": 8,
                            "team": {
                                "id": 512,
                                "name": "Frosinone",
                                "logo": "https://media-4.api-sports.io/football/teams/512.png"
                            },
                            "points": 9,
                            "goalsDiff": 1,
                            "group": "Serie A",
                            "form": "DDWDW",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 6,
                                "win": 2,
                                "draw": 3,
                                "lose": 1,
                                "goals": {
                                    "for": 9,
                                    "against": 8
                                }
                            },
                            "home": {
                                "played": 4,
                                "win": 2,
                                "draw": 1,
                                "lose": 1,
                                "goals": {
                                    "for": 8,
                                    "against": 7
                                }
                            },
                            "away": {
                                "played": 2,
                                "win": 0,
                                "draw": 2,
                                "lose": 0,
                                "goals": {
                                    "for": 1,
                                    "against": 1
                                }
                            },
                            "update": "2023-09-28T00:00:00+00:00"
                        },
                        {
                            "rank": 9,
                            "team": {
                                "id": 488,
                                "name": "Sassuolo",
                                "logo": "https://media-4.api-sports.io/football/teams/488.png"
                            },
                            "points": 9,
                            "goalsDiff": -1,
                            "group": "Serie A",
                            "form": "WWLWL",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 6,
                                "win": 3,
                                "draw": 0,
                                "lose": 3,
                                "goals": {
                                    "for": 11,
                                    "against": 12
                                }
                            },
                            "home": {
                                "played": 3,
                                "win": 2,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 7,
                                    "against": 5
                                }
                            },
                            "away": {
                                "played": 3,
                                "win": 1,
                                "draw": 0,
                                "lose": 2,
                                "goals": {
                                    "for": 4,
                                    "against": 7
                                }
                            },
                            "update": "2023-09-28T00:00:00+00:00"
                        },
                        {
                            "rank": 10,
                            "team": {
                                "id": 503,
                                "name": "Torino",
                                "logo": "https://media-4.api-sports.io/football/teams/503.png"
                            },
                            "points": 8,
                            "goalsDiff": -1,
                            "group": "Serie A",
                            "form": "LDWWL",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 6,
                                "win": 2,
                                "draw": 2,
                                "lose": 2,
                                "goals": {
                                    "for": 6,
                                    "against": 7
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
                                "played": 3,
                                "win": 1,
                                "draw": 0,
                                "lose": 2,
                                "goals": {
                                    "for": 4,
                                    "against": 6
                                }
                            },
                            "update": "2023-09-28T00:00:00+00:00"
                        },
                        {
                            "rank": 11,
                            "team": {
                                "id": 495,
                                "name": "Genoa",
                                "logo": "https://media-4.api-sports.io/football/teams/495.png"
                            },
                            "points": 7,
                            "goalsDiff": -1,
                            "group": "Serie A",
                            "form": "WLDLW",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 6,
                                "win": 2,
                                "draw": 1,
                                "lose": 3,
                                "goals": {
                                    "for": 8,
                                    "against": 9
                                }
                            },
                            "home": {
                                "played": 3,
                                "win": 1,
                                "draw": 1,
                                "lose": 1,
                                "goals": {
                                    "for": 7,
                                    "against": 7
                                }
                            },
                            "away": {
                                "played": 3,
                                "win": 1,
                                "draw": 0,
                                "lose": 2,
                                "goals": {
                                    "for": 1,
                                    "against": 2
                                }
                            },
                            "update": "2023-09-28T00:00:00+00:00"
                        },
                        {
                            "rank": 12,
                            "team": {
                                "id": 487,
                                "name": "Lazio",
                                "logo": "https://media-4.api-sports.io/football/teams/487.png"
                            },
                            "points": 7,
                            "goalsDiff": -1,
                            "group": "Serie A",
                            "form": "WDLWL",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 6,
                                "win": 2,
                                "draw": 1,
                                "lose": 3,
                                "goals": {
                                    "for": 7,
                                    "against": 8
                                }
                            },
                            "home": {
                                "played": 3,
                                "win": 1,
                                "draw": 1,
                                "lose": 1,
                                "goals": {
                                    "for": 3,
                                    "against": 2
                                }
                            },
                            "away": {
                                "played": 3,
                                "win": 1,
                                "draw": 0,
                                "lose": 2,
                                "goals": {
                                    "for": 4,
                                    "against": 6
                                }
                            },
                            "update": "2023-09-28T00:00:00+00:00"
                        },
                        {
                            "rank": 13,
                            "team": {
                                "id": 500,
                                "name": "Bologna",
                                "logo": "https://media-4.api-sports.io/football/teams/500.png"
                            },
                            "points": 7,
                            "goalsDiff": -1,
                            "group": "Serie A",
                            "form": "DDDWD",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 6,
                                "win": 1,
                                "draw": 4,
                                "lose": 1,
                                "goals": {
                                    "for": 3,
                                    "against": 4
                                }
                            },
                            "home": {
                                "played": 3,
                                "win": 1,
                                "draw": 1,
                                "lose": 1,
                                "goals": {
                                    "for": 2,
                                    "against": 3
                                }
                            },
                            "away": {
                                "played": 3,
                                "win": 0,
                                "draw": 3,
                                "lose": 0,
                                "goals": {
                                    "for": 1,
                                    "against": 1
                                }
                            },
                            "update": "2023-09-28T00:00:00+00:00"
                        },
                        {
                            "rank": 14,
                            "team": {
                                "id": 504,
                                "name": "Verona",
                                "logo": "https://media-4.api-sports.io/football/teams/504.png"
                            },
                            "points": 7,
                            "goalsDiff": -2,
                            "group": "Serie A",
                            "form": "LLDLW",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 6,
                                "win": 2,
                                "draw": 1,
                                "lose": 3,
                                "goals": {
                                    "for": 4,
                                    "against": 6
                                }
                            },
                            "home": {
                                "played": 3,
                                "win": 1,
                                "draw": 1,
                                "lose": 1,
                                "goals": {
                                    "for": 2,
                                    "against": 2
                                }
                            },
                            "away": {
                                "played": 3,
                                "win": 1,
                                "draw": 0,
                                "lose": 2,
                                "goals": {
                                    "for": 2,
                                    "against": 4
                                }
                            },
                            "update": "2023-09-28T00:00:00+00:00"
                        },
                        {
                            "rank": 15,
                            "team": {
                                "id": 1579,
                                "name": "Monza",
                                "logo": "https://media-4.api-sports.io/football/teams/1579.png"
                            },
                            "points": 6,
                            "goalsDiff": -3,
                            "group": "Serie A",
                            "form": "DDDLW",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 6,
                                "win": 1,
                                "draw": 3,
                                "lose": 2,
                                "goals": {
                                    "for": 4,
                                    "against": 7
                                }
                            },
                            "home": {
                                "played": 3,
                                "win": 1,
                                "draw": 2,
                                "lose": 0,
                                "goals": {
                                    "for": 3,
                                    "against": 1
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
                            "update": "2023-09-28T00:00:00+00:00"
                        },
                        {
                            "rank": 16,
                            "team": {
                                "id": 497,
                                "name": "AS Roma",
                                "logo": "https://media-4.api-sports.io/football/teams/497.png"
                            },
                            "points": 5,
                            "goalsDiff": 2,
                            "group": "Serie A",
                            "form": "LDWLL",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 6,
                                "win": 1,
                                "draw": 2,
                                "lose": 3,
                                "goals": {
                                    "for": 13,
                                    "against": 11
                                }
                            },
                            "home": {
                                "played": 3,
                                "win": 1,
                                "draw": 1,
                                "lose": 1,
                                "goals": {
                                    "for": 10,
                                    "against": 4
                                }
                            },
                            "away": {
                                "played": 3,
                                "win": 0,
                                "draw": 1,
                                "lose": 2,
                                "goals": {
                                    "for": 3,
                                    "against": 7
                                }
                            },
                            "update": "2023-09-28T00:00:00+00:00"
                        },
                        {
                            "rank": 17,
                            "team": {
                                "id": 514,
                                "name": "Salernitana",
                                "logo": "https://media-4.api-sports.io/football/teams/514.png"
                            },
                            "points": 3,
                            "goalsDiff": -6,
                            "group": "Serie A",
                            "form": "LDLLD",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 6,
                                "win": 0,
                                "draw": 3,
                                "lose": 3,
                                "goals": {
                                    "for": 4,
                                    "against": 10
                                }
                            },
                            "home": {
                                "played": 3,
                                "win": 0,
                                "draw": 2,
                                "lose": 1,
                                "goals": {
                                    "for": 2,
                                    "against": 5
                                }
                            },
                            "away": {
                                "played": 3,
                                "win": 0,
                                "draw": 1,
                                "lose": 2,
                                "goals": {
                                    "for": 2,
                                    "against": 5
                                }
                            },
                            "update": "2023-09-28T00:00:00+00:00"
                        },
                        {
                            "rank": 18,
                            "team": {
                                "id": 494,
                                "name": "Udinese",
                                "logo": "https://media-4.api-sports.io/football/teams/494.png"
                            },
                            "points": 3,
                            "goalsDiff": -8,
                            "group": "Serie A",
                            "form": "LLDDD",
                            "status": "same",
                            "description": "Relegation - Serie B",
                            "all": {
                                "played": 6,
                                "win": 0,
                                "draw": 3,
                                "lose": 3,
                                "goals": {
                                    "for": 2,
                                    "against": 10
                                }
                            },
                            "home": {
                                "played": 3,
                                "win": 0,
                                "draw": 1,
                                "lose": 2,
                                "goals": {
                                    "for": 0,
                                    "against": 5
                                }
                            },
                            "away": {
                                "played": 3,
                                "win": 0,
                                "draw": 2,
                                "lose": 1,
                                "goals": {
                                    "for": 2,
                                    "against": 5
                                }
                            },
                            "update": "2023-09-28T00:00:00+00:00"
                        },
                        {
                            "rank": 19,
                            "team": {
                                "id": 511,
                                "name": "Empoli",
                                "logo": "https://media-4.api-sports.io/football/teams/511.png"
                            },
                            "points": 3,
                            "goalsDiff": -12,
                            "group": "Serie A",
                            "form": "WLLLL",
                            "status": "same",
                            "description": "Relegation - Serie B",
                            "all": {
                                "played": 6,
                                "win": 1,
                                "draw": 0,
                                "lose": 5,
                                "goals": {
                                    "for": 1,
                                    "against": 13
                                }
                            },
                            "home": {
                                "played": 4,
                                "win": 1,
                                "draw": 0,
                                "lose": 3,
                                "goals": {
                                    "for": 1,
                                    "against": 4
                                }
                            },
                            "away": {
                                "played": 2,
                                "win": 0,
                                "draw": 0,
                                "lose": 2,
                                "goals": {
                                    "for": 0,
                                    "against": 9
                                }
                            },
                            "update": "2023-09-28T00:00:00+00:00"
                        },
                        {
                            "rank": 20,
                            "team": {
                                "id": 490,
                                "name": "Cagliari",
                                "logo": "https://media-4.api-sports.io/football/teams/490.png"
                            },
                            "points": 2,
                            "goalsDiff": -7,
                            "group": "Serie A",
                            "form": "LLDLL",
                            "status": "same",
                            "description": "Relegation - Serie B",
                            "all": {
                                "played": 6,
                                "win": 0,
                                "draw": 2,
                                "lose": 4,
                                "goals": {
                                    "for": 2,
                                    "against": 9
                                }
                            },
                            "home": {
                                "played": 3,
                                "win": 0,
                                "draw": 1,
                                "lose": 2,
                                "goals": {
                                    "for": 1,
                                    "against": 5
                                }
                            },
                            "away": {
                                "played": 3,
                                "win": 0,
                                "draw": 1,
                                "lose": 2,
                                "goals": {
                                    "for": 1,
                                    "against": 4
                                }
                            },
                            "update": "2023-09-28T00:00:00+00:00"
                        }
                    ]
                ]
            }
        }
    ]
}