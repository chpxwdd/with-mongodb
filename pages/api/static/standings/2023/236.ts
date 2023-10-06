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
        "league": "236",
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
                "id": 236,
                "name": "First League",
                "country": "Russia",
                "logo": "https://media-4.api-sports.io/football/leagues/236.png",
                "flag": "https://media-4.api-sports.io/flags/ru.svg",
                "season": 2023,
                "standings": [
                    [
                        {
                            "rank": 1,
                            "team": {
                                "id": 6813,
                                "name": "Makhachkala",
                                "logo": "https://media-4.api-sports.io/football/teams/6813.png"
                            },
                            "points": 24,
                            "goalsDiff": 9,
                            "group": "FNL",
                            "form": "WWWWW",
                            "status": "same",
                            "description": "Promotion - Premier League",
                            "all": {
                                "played": 12,
                                "win": 7,
                                "draw": 3,
                                "lose": 2,
                                "goals": {
                                    "for": 14,
                                    "against": 5
                                }
                            },
                            "home": {
                                "played": 5,
                                "win": 3,
                                "draw": 1,
                                "lose": 1,
                                "goals": {
                                    "for": 8,
                                    "against": 2
                                }
                            },
                            "away": {
                                "played": 7,
                                "win": 4,
                                "draw": 2,
                                "lose": 1,
                                "goals": {
                                    "for": 6,
                                    "against": 3
                                }
                            },
                            "update": "2023-10-05T00:00:00+00:00"
                        },
                        {
                            "rank": 2,
                            "team": {
                                "id": 6787,
                                "name": "Alaniya Vladikavkaz",
                                "logo": "https://media-4.api-sports.io/football/teams/6787.png"
                            },
                            "points": 24,
                            "goalsDiff": 5,
                            "group": "FNL",
                            "form": "DWLDW",
                            "status": "same",
                            "description": "Promotion - Premier League",
                            "all": {
                                "played": 12,
                                "win": 7,
                                "draw": 3,
                                "lose": 2,
                                "goals": {
                                    "for": 14,
                                    "against": 9
                                }
                            },
                            "home": {
                                "played": 6,
                                "win": 5,
                                "draw": 1,
                                "lose": 0,
                                "goals": {
                                    "for": 10,
                                    "against": 3
                                }
                            },
                            "away": {
                                "played": 6,
                                "win": 2,
                                "draw": 2,
                                "lose": 2,
                                "goals": {
                                    "for": 4,
                                    "against": 6
                                }
                            },
                            "update": "2023-10-05T00:00:00+00:00"
                        },
                        {
                            "rank": 3,
                            "team": {
                                "id": 1994,
                                "name": "Khimki",
                                "logo": "https://media-4.api-sports.io/football/teams/1994.png"
                            },
                            "points": 20,
                            "goalsDiff": 3,
                            "group": "FNL",
                            "form": "WWLWD",
                            "status": "same",
                            "description": "Promotion - Premier League (Promotion: )",
                            "all": {
                                "played": 12,
                                "win": 6,
                                "draw": 2,
                                "lose": 4,
                                "goals": {
                                    "for": 15,
                                    "against": 12
                                }
                            },
                            "home": {
                                "played": 5,
                                "win": 2,
                                "draw": 2,
                                "lose": 1,
                                "goals": {
                                    "for": 6,
                                    "against": 4
                                }
                            },
                            "away": {
                                "played": 7,
                                "win": 4,
                                "draw": 0,
                                "lose": 3,
                                "goals": {
                                    "for": 9,
                                    "against": 8
                                }
                            },
                            "update": "2023-10-05T00:00:00+00:00"
                        },
                        {
                            "rank": 4,
                            "team": {
                                "id": 1998,
                                "name": "Shinnik Yaroslavl",
                                "logo": "https://media-4.api-sports.io/football/teams/1998.png"
                            },
                            "points": 19,
                            "goalsDiff": 1,
                            "group": "FNL",
                            "form": "LWLWW",
                            "status": "same",
                            "description": "Promotion - Premier League (Promotion: )",
                            "all": {
                                "played": 12,
                                "win": 6,
                                "draw": 1,
                                "lose": 5,
                                "goals": {
                                    "for": 16,
                                    "against": 15
                                }
                            },
                            "home": {
                                "played": 6,
                                "win": 4,
                                "draw": 0,
                                "lose": 2,
                                "goals": {
                                    "for": 8,
                                    "against": 6
                                }
                            },
                            "away": {
                                "played": 6,
                                "win": 2,
                                "draw": 1,
                                "lose": 3,
                                "goals": {
                                    "for": 8,
                                    "against": 9
                                }
                            },
                            "update": "2023-10-05T00:00:00+00:00"
                        },
                        {
                            "rank": 5,
                            "team": {
                                "id": 2000,
                                "name": "Tyumen",
                                "logo": "https://media-4.api-sports.io/football/teams/2000.png"
                            },
                            "points": 19,
                            "goalsDiff": 5,
                            "group": "FNL",
                            "form": "WDDDL",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 12,
                                "win": 5,
                                "draw": 4,
                                "lose": 3,
                                "goals": {
                                    "for": 18,
                                    "against": 13
                                }
                            },
                            "home": {
                                "played": 6,
                                "win": 3,
                                "draw": 2,
                                "lose": 1,
                                "goals": {
                                    "for": 11,
                                    "against": 5
                                }
                            },
                            "away": {
                                "played": 6,
                                "win": 2,
                                "draw": 2,
                                "lose": 2,
                                "goals": {
                                    "for": 7,
                                    "against": 8
                                }
                            },
                            "update": "2023-10-05T00:00:00+00:00"
                        },
                        {
                            "rank": 6,
                            "team": {
                                "id": 1995,
                                "name": "FK Sokol Saratov",
                                "logo": "https://media-4.api-sports.io/football/teams/1995.png"
                            },
                            "points": 18,
                            "goalsDiff": -4,
                            "group": "FNL",
                            "form": "DLLDW",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 12,
                                "win": 5,
                                "draw": 3,
                                "lose": 4,
                                "goals": {
                                    "for": 12,
                                    "against": 16
                                }
                            },
                            "home": {
                                "played": 6,
                                "win": 3,
                                "draw": 2,
                                "lose": 1,
                                "goals": {
                                    "for": 6,
                                    "against": 4
                                }
                            },
                            "away": {
                                "played": 6,
                                "win": 2,
                                "draw": 1,
                                "lose": 3,
                                "goals": {
                                    "for": 6,
                                    "against": 12
                                }
                            },
                            "update": "2023-10-05T00:00:00+00:00"
                        },
                        {
                            "rank": 7,
                            "team": {
                                "id": 1087,
                                "name": "Ska-khabarovsk",
                                "logo": "https://media-4.api-sports.io/football/teams/1087.png"
                            },
                            "points": 18,
                            "goalsDiff": 3,
                            "group": "FNL",
                            "form": "WLWDL",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 12,
                                "win": 5,
                                "draw": 3,
                                "lose": 4,
                                "goals": {
                                    "for": 15,
                                    "against": 12
                                }
                            },
                            "home": {
                                "played": 8,
                                "win": 5,
                                "draw": 2,
                                "lose": 1,
                                "goals": {
                                    "for": 11,
                                    "against": 4
                                }
                            },
                            "away": {
                                "played": 4,
                                "win": 0,
                                "draw": 1,
                                "lose": 3,
                                "goals": {
                                    "for": 4,
                                    "against": 8
                                }
                            },
                            "update": "2023-10-05T00:00:00+00:00"
                        },
                        {
                            "rank": 8,
                            "team": {
                                "id": 6786,
                                "name": "Akron",
                                "logo": "https://media-4.api-sports.io/football/teams/6786.png"
                            },
                            "points": 18,
                            "goalsDiff": 6,
                            "group": "FNL",
                            "form": "LDWLD",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 12,
                                "win": 5,
                                "draw": 3,
                                "lose": 4,
                                "goals": {
                                    "for": 15,
                                    "against": 9
                                }
                            },
                            "home": {
                                "played": 7,
                                "win": 3,
                                "draw": 2,
                                "lose": 2,
                                "goals": {
                                    "for": 9,
                                    "against": 5
                                }
                            },
                            "away": {
                                "played": 5,
                                "win": 2,
                                "draw": 1,
                                "lose": 2,
                                "goals": {
                                    "for": 6,
                                    "against": 4
                                }
                            },
                            "update": "2023-10-05T00:00:00+00:00"
                        },
                        {
                            "rank": 9,
                            "team": {
                                "id": 3985,
                                "name": "Torpedo Moskva",
                                "logo": "https://media-4.api-sports.io/football/teams/3985.png"
                            },
                            "points": 17,
                            "goalsDiff": -1,
                            "group": "FNL",
                            "form": "LLWWL",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 12,
                                "win": 5,
                                "draw": 2,
                                "lose": 5,
                                "goals": {
                                    "for": 12,
                                    "against": 13
                                }
                            },
                            "home": {
                                "played": 7,
                                "win": 4,
                                "draw": 1,
                                "lose": 2,
                                "goals": {
                                    "for": 9,
                                    "against": 6
                                }
                            },
                            "away": {
                                "played": 5,
                                "win": 1,
                                "draw": 1,
                                "lose": 3,
                                "goals": {
                                    "for": 3,
                                    "against": 7
                                }
                            },
                            "update": "2023-10-05T00:00:00+00:00"
                        },
                        {
                            "rank": 10,
                            "team": {
                                "id": 6822,
                                "name": "Rodina Moskva",
                                "logo": "https://media-4.api-sports.io/football/teams/6822.png"
                            },
                            "points": 17,
                            "goalsDiff": 4,
                            "group": "FNL",
                            "form": "WLDDW",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 12,
                                "win": 4,
                                "draw": 5,
                                "lose": 3,
                                "goals": {
                                    "for": 19,
                                    "against": 15
                                }
                            },
                            "home": {
                                "played": 6,
                                "win": 3,
                                "draw": 1,
                                "lose": 2,
                                "goals": {
                                    "for": 10,
                                    "against": 7
                                }
                            },
                            "away": {
                                "played": 6,
                                "win": 1,
                                "draw": 4,
                                "lose": 1,
                                "goals": {
                                    "for": 9,
                                    "against": 8
                                }
                            },
                            "update": "2023-10-05T00:00:00+00:00"
                        },
                        {
                            "rank": 11,
                            "team": {
                                "id": 6801,
                                "name": "KAMAZ",
                                "logo": "https://media-4.api-sports.io/football/teams/6801.png"
                            },
                            "points": 16,
                            "goalsDiff": -1,
                            "group": "FNL",
                            "form": "LWLDD",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 12,
                                "win": 4,
                                "draw": 4,
                                "lose": 4,
                                "goals": {
                                    "for": 8,
                                    "against": 9
                                }
                            },
                            "home": {
                                "played": 6,
                                "win": 3,
                                "draw": 2,
                                "lose": 1,
                                "goals": {
                                    "for": 6,
                                    "against": 3
                                }
                            },
                            "away": {
                                "played": 6,
                                "win": 1,
                                "draw": 2,
                                "lose": 3,
                                "goals": {
                                    "for": 2,
                                    "against": 6
                                }
                            },
                            "update": "2023-10-05T00:00:00+00:00"
                        },
                        {
                            "rank": 12,
                            "team": {
                                "id": 1077,
                                "name": "Arsenal Tula",
                                "logo": "https://media-4.api-sports.io/football/teams/1077.png"
                            },
                            "points": 15,
                            "goalsDiff": -2,
                            "group": "FNL",
                            "form": "DDWLW",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 12,
                                "win": 3,
                                "draw": 6,
                                "lose": 3,
                                "goals": {
                                    "for": 10,
                                    "against": 12
                                }
                            },
                            "home": {
                                "played": 6,
                                "win": 2,
                                "draw": 3,
                                "lose": 1,
                                "goals": {
                                    "for": 5,
                                    "against": 3
                                }
                            },
                            "away": {
                                "played": 6,
                                "win": 1,
                                "draw": 3,
                                "lose": 2,
                                "goals": {
                                    "for": 5,
                                    "against": 9
                                }
                            },
                            "update": "2023-10-05T00:00:00+00:00"
                        },
                        {
                            "rank": 13,
                            "team": {
                                "id": 1089,
                                "name": "Enisey",
                                "logo": "https://media-4.api-sports.io/football/teams/1089.png"
                            },
                            "points": 14,
                            "goalsDiff": 0,
                            "group": "FNL",
                            "form": "LWLDL",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 12,
                                "win": 4,
                                "draw": 2,
                                "lose": 6,
                                "goals": {
                                    "for": 16,
                                    "against": 16
                                }
                            },
                            "home": {
                                "played": 6,
                                "win": 3,
                                "draw": 1,
                                "lose": 2,
                                "goals": {
                                    "for": 11,
                                    "against": 7
                                }
                            },
                            "away": {
                                "played": 6,
                                "win": 1,
                                "draw": 1,
                                "lose": 4,
                                "goals": {
                                    "for": 5,
                                    "against": 9
                                }
                            },
                            "update": "2023-10-05T00:00:00+00:00"
                        },
                        {
                            "rank": 14,
                            "team": {
                                "id": 6811,
                                "name": "Leningradets",
                                "logo": "https://media-4.api-sports.io/football/teams/6811.png"
                            },
                            "points": 14,
                            "goalsDiff": -4,
                            "group": "FNL",
                            "form": "WLDLD",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 12,
                                "win": 3,
                                "draw": 5,
                                "lose": 4,
                                "goals": {
                                    "for": 10,
                                    "against": 14
                                }
                            },
                            "home": {
                                "played": 5,
                                "win": 0,
                                "draw": 3,
                                "lose": 2,
                                "goals": {
                                    "for": 3,
                                    "against": 5
                                }
                            },
                            "away": {
                                "played": 7,
                                "win": 3,
                                "draw": 2,
                                "lose": 2,
                                "goals": {
                                    "for": 7,
                                    "against": 9
                                }
                            },
                            "update": "2023-10-05T00:00:00+00:00"
                        },
                        {
                            "rank": 15,
                            "team": {
                                "id": 6791,
                                "name": "Chernomorets",
                                "logo": "https://media-4.api-sports.io/football/teams/6791.png"
                            },
                            "points": 14,
                            "goalsDiff": 0,
                            "group": "FNL",
                            "form": "DLWLD",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 12,
                                "win": 2,
                                "draw": 8,
                                "lose": 2,
                                "goals": {
                                    "for": 13,
                                    "against": 13
                                }
                            },
                            "home": {
                                "played": 6,
                                "win": 2,
                                "draw": 4,
                                "lose": 0,
                                "goals": {
                                    "for": 9,
                                    "against": 6
                                }
                            },
                            "away": {
                                "played": 6,
                                "win": 0,
                                "draw": 4,
                                "lose": 2,
                                "goals": {
                                    "for": 4,
                                    "against": 7
                                }
                            },
                            "update": "2023-10-05T00:00:00+00:00"
                        },
                        {
                            "rank": 16,
                            "team": {
                                "id": 2001,
                                "name": "FK Neftekhimik",
                                "logo": "https://media-4.api-sports.io/football/teams/2001.png"
                            },
                            "points": 12,
                            "goalsDiff": -6,
                            "group": "FNL",
                            "form": "DDWWL",
                            "status": "same",
                            "description": "Relegation",
                            "all": {
                                "played": 12,
                                "win": 3,
                                "draw": 3,
                                "lose": 6,
                                "goals": {
                                    "for": 8,
                                    "against": 14
                                }
                            },
                            "home": {
                                "played": 6,
                                "win": 2,
                                "draw": 2,
                                "lose": 2,
                                "goals": {
                                    "for": 6,
                                    "against": 8
                                }
                            },
                            "away": {
                                "played": 6,
                                "win": 1,
                                "draw": 1,
                                "lose": 4,
                                "goals": {
                                    "for": 2,
                                    "against": 6
                                }
                            },
                            "update": "2023-10-05T00:00:00+00:00"
                        },
                        {
                            "rank": 17,
                            "team": {
                                "id": 6831,
                                "name": "Urozhay",
                                "logo": "https://media-4.api-sports.io/football/teams/6831.png"
                            },
                            "points": 6,
                            "goalsDiff": -9,
                            "group": "FNL",
                            "form": "LDLLD",
                            "status": "same",
                            "description": "Relegation",
                            "all": {
                                "played": 12,
                                "win": 1,
                                "draw": 3,
                                "lose": 8,
                                "goals": {
                                    "for": 6,
                                    "against": 15
                                }
                            },
                            "home": {
                                "played": 6,
                                "win": 1,
                                "draw": 2,
                                "lose": 3,
                                "goals": {
                                    "for": 4,
                                    "against": 5
                                }
                            },
                            "away": {
                                "played": 6,
                                "win": 0,
                                "draw": 1,
                                "lose": 5,
                                "goals": {
                                    "for": 2,
                                    "against": 10
                                }
                            },
                            "update": "2023-10-05T00:00:00+00:00"
                        },
                        {
                            "rank": 18,
                            "team": {
                                "id": 2004,
                                "name": "Volgar Astrakhan",
                                "logo": "https://media-4.api-sports.io/football/teams/2004.png"
                            },
                            "points": 6,
                            "goalsDiff": -9,
                            "group": "FNL",
                            "form": "DDDDL",
                            "status": "same",
                            "description": "Relegation",
                            "all": {
                                "played": 12,
                                "win": 0,
                                "draw": 6,
                                "lose": 6,
                                "goals": {
                                    "for": 9,
                                    "against": 18
                                }
                            },
                            "home": {
                                "played": 5,
                                "win": 0,
                                "draw": 2,
                                "lose": 3,
                                "goals": {
                                    "for": 5,
                                    "against": 10
                                }
                            },
                            "away": {
                                "played": 7,
                                "win": 0,
                                "draw": 4,
                                "lose": 3,
                                "goals": {
                                    "for": 4,
                                    "against": 8
                                }
                            },
                            "update": "2023-10-05T00:00:00+00:00"
                        }
                    ]
                ]
            }
        }
    ]
}