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
        "league": "61",
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
                "id": 61,
                "name": "Ligue 1",
                "country": "France",
                "logo": "https://media-4.api-sports.io/football/leagues/61.png",
                "flag": "https://media-4.api-sports.io/flags/fr.svg",
                "season": 2023,
                "standings": [
                    [
                        {
                            "rank": 1,
                            "team": {
                                "id": 106,
                                "name": "Stade Brestois 29",
                                "logo": "https://media-4.api-sports.io/football/teams/106.png"
                            },
                            "points": 13,
                            "goalsDiff": 2,
                            "group": "Ligue 1",
                            "form": "WWDLW",
                            "status": "same",
                            "description": "Promotion - Champions League (Group Stage: )",
                            "all": {
                                "played": 6,
                                "win": 4,
                                "draw": 1,
                                "lose": 1,
                                "goals": {
                                    "for": 8,
                                    "against": 6
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
                                "played": 3,
                                "win": 2,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 4,
                                    "against": 4
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 2,
                            "team": {
                                "id": 84,
                                "name": "Nice",
                                "logo": "https://media-4.api-sports.io/football/teams/84.png"
                            },
                            "points": 12,
                            "goalsDiff": 4,
                            "group": "Ligue 1",
                            "form": "WWWDD",
                            "status": "same",
                            "description": "Promotion - Champions League (Group Stage: )",
                            "all": {
                                "played": 6,
                                "win": 3,
                                "draw": 3,
                                "lose": 0,
                                "goals": {
                                    "for": 8,
                                    "against": 4
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
                                "win": 2,
                                "draw": 1,
                                "lose": 0,
                                "goals": {
                                    "for": 5,
                                    "against": 3
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 3,
                            "team": {
                                "id": 85,
                                "name": "Paris Saint Germain",
                                "logo": "https://media-4.api-sports.io/football/teams/85.png"
                            },
                            "points": 11,
                            "goalsDiff": 8,
                            "group": "Ligue 1",
                            "form": "WLWWD",
                            "status": "same",
                            "description": "Promotion - Champions League (Group Stage: )",
                            "all": {
                                "played": 6,
                                "win": 3,
                                "draw": 2,
                                "lose": 1,
                                "goals": {
                                    "for": 14,
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
                                    "against": 4
                                }
                            },
                            "away": {
                                "played": 2,
                                "win": 1,
                                "draw": 1,
                                "lose": 0,
                                "goals": {
                                    "for": 5,
                                    "against": 2
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 4,
                            "team": {
                                "id": 91,
                                "name": "Monaco",
                                "logo": "https://media-4.api-sports.io/football/teams/91.png"
                            },
                            "points": 11,
                            "goalsDiff": 7,
                            "group": "Ligue 1",
                            "form": "LDWDW",
                            "status": "same",
                            "description": "Promotion - Champions League (Qualification: )",
                            "all": {
                                "played": 6,
                                "win": 3,
                                "draw": 2,
                                "lose": 1,
                                "goals": {
                                    "for": 15,
                                    "against": 8
                                }
                            },
                            "home": {
                                "played": 3,
                                "win": 2,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 6,
                                    "against": 1
                                }
                            },
                            "away": {
                                "played": 3,
                                "win": 1,
                                "draw": 2,
                                "lose": 0,
                                "goals": {
                                    "for": 9,
                                    "against": 7
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 5,
                            "team": {
                                "id": 93,
                                "name": "Reims",
                                "logo": "https://media-4.api-sports.io/football/teams/93.png"
                            },
                            "points": 10,
                            "goalsDiff": 3,
                            "group": "Ligue 1",
                            "form": "WLDWW",
                            "status": "same",
                            "description": "Promotion - Europa League (Group Stage: )",
                            "all": {
                                "played": 6,
                                "win": 3,
                                "draw": 1,
                                "lose": 2,
                                "goals": {
                                    "for": 11,
                                    "against": 8
                                }
                            },
                            "home": {
                                "played": 2,
                                "win": 1,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 3,
                                    "against": 2
                                }
                            },
                            "away": {
                                "played": 4,
                                "win": 2,
                                "draw": 1,
                                "lose": 1,
                                "goals": {
                                    "for": 8,
                                    "against": 6
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 6,
                            "team": {
                                "id": 95,
                                "name": "Strasbourg",
                                "logo": "https://media-4.api-sports.io/football/teams/95.png"
                            },
                            "points": 10,
                            "goalsDiff": -1,
                            "group": "Ligue 1",
                            "form": "WDLWL",
                            "status": "same",
                            "description": "Promotion - Europa Conference League (Qualification: )",
                            "all": {
                                "played": 6,
                                "win": 3,
                                "draw": 1,
                                "lose": 2,
                                "goals": {
                                    "for": 7,
                                    "against": 8
                                }
                            },
                            "home": {
                                "played": 3,
                                "win": 2,
                                "draw": 1,
                                "lose": 0,
                                "goals": {
                                    "for": 6,
                                    "against": 3
                                }
                            },
                            "away": {
                                "played": 3,
                                "win": 1,
                                "draw": 0,
                                "lose": 2,
                                "goals": {
                                    "for": 1,
                                    "against": 5
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 7,
                            "team": {
                                "id": 111,
                                "name": "LE Havre",
                                "logo": "https://media-4.api-sports.io/football/teams/111.png"
                            },
                            "points": 9,
                            "goalsDiff": 3,
                            "group": "Ligue 1",
                            "form": "WDWDL",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 6,
                                "win": 2,
                                "draw": 3,
                                "lose": 1,
                                "goals": {
                                    "for": 10,
                                    "against": 7
                                }
                            },
                            "home": {
                                "played": 3,
                                "win": 2,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 6,
                                    "against": 3
                                }
                            },
                            "away": {
                                "played": 3,
                                "win": 0,
                                "draw": 3,
                                "lose": 0,
                                "goals": {
                                    "for": 4,
                                    "against": 4
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 8,
                            "team": {
                                "id": 81,
                                "name": "Marseille",
                                "logo": "https://media-4.api-sports.io/football/teams/81.png"
                            },
                            "points": 9,
                            "goalsDiff": -1,
                            "group": "Ligue 1",
                            "form": "LDDWD",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 6,
                                "win": 2,
                                "draw": 3,
                                "lose": 1,
                                "goals": {
                                    "for": 7,
                                    "against": 8
                                }
                            },
                            "home": {
                                "played": 3,
                                "win": 2,
                                "draw": 1,
                                "lose": 0,
                                "goals": {
                                    "for": 4,
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
                                    "against": 7
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 9,
                            "team": {
                                "id": 94,
                                "name": "Rennes",
                                "logo": "https://media-4.api-sports.io/football/teams/94.png"
                            },
                            "points": 8,
                            "goalsDiff": 4,
                            "group": "Ligue 1",
                            "form": "DDDDD",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 6,
                                "win": 1,
                                "draw": 5,
                                "lose": 0,
                                "goals": {
                                    "for": 10,
                                    "against": 6
                                }
                            },
                            "home": {
                                "played": 3,
                                "win": 1,
                                "draw": 2,
                                "lose": 0,
                                "goals": {
                                    "for": 9,
                                    "against": 5
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
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 10,
                            "team": {
                                "id": 83,
                                "name": "Nantes",
                                "logo": "https://media-4.api-sports.io/football/teams/83.png"
                            },
                            "points": 8,
                            "goalsDiff": 0,
                            "group": "Ligue 1",
                            "form": "WWDDL",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 6,
                                "win": 2,
                                "draw": 2,
                                "lose": 2,
                                "goals": {
                                    "for": 11,
                                    "against": 11
                                }
                            },
                            "home": {
                                "played": 4,
                                "win": 1,
                                "draw": 2,
                                "lose": 1,
                                "goals": {
                                    "for": 10,
                                    "against": 9
                                }
                            },
                            "away": {
                                "played": 2,
                                "win": 1,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 1,
                                    "against": 2
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 11,
                            "team": {
                                "id": 79,
                                "name": "Lille",
                                "logo": "https://media-4.api-sports.io/football/teams/79.png"
                            },
                            "points": 8,
                            "goalsDiff": -1,
                            "group": "Ligue 1",
                            "form": "LDWLW",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 6,
                                "win": 2,
                                "draw": 2,
                                "lose": 2,
                                "goals": {
                                    "for": 8,
                                    "against": 9
                                }
                            },
                            "home": {
                                "played": 3,
                                "win": 2,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 4,
                                    "against": 2
                                }
                            },
                            "away": {
                                "played": 3,
                                "win": 0,
                                "draw": 2,
                                "lose": 1,
                                "goals": {
                                    "for": 4,
                                    "against": 7
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 12,
                            "team": {
                                "id": 112,
                                "name": "Metz",
                                "logo": "https://media-4.api-sports.io/football/teams/112.png"
                            },
                            "points": 8,
                            "goalsDiff": -3,
                            "group": "Ligue 1",
                            "form": "LWDWD",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 6,
                                "win": 2,
                                "draw": 2,
                                "lose": 2,
                                "goals": {
                                    "for": 7,
                                    "against": 10
                                }
                            },
                            "home": {
                                "played": 3,
                                "win": 0,
                                "draw": 2,
                                "lose": 1,
                                "goals": {
                                    "for": 4,
                                    "against": 5
                                }
                            },
                            "away": {
                                "played": 3,
                                "win": 2,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 3,
                                    "against": 5
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 13,
                            "team": {
                                "id": 82,
                                "name": "Montpellier",
                                "logo": "https://media-4.api-sports.io/football/teams/82.png"
                            },
                            "points": 6,
                            "goalsDiff": 0,
                            "group": "Ligue 1",
                            "form": "DDLLW",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 6,
                                "win": 1,
                                "draw": 3,
                                "lose": 2,
                                "goals": {
                                    "for": 9,
                                    "against": 9
                                }
                            },
                            "home": {
                                "played": 3,
                                "win": 0,
                                "draw": 2,
                                "lose": 1,
                                "goals": {
                                    "for": 3,
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
                                    "against": 4
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 14,
                            "team": {
                                "id": 97,
                                "name": "Lorient",
                                "logo": "https://media-4.api-sports.io/football/teams/97.png"
                            },
                            "points": 6,
                            "goalsDiff": -2,
                            "group": "Ligue 1",
                            "form": "LDLWD",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 6,
                                "win": 1,
                                "draw": 3,
                                "lose": 2,
                                "goals": {
                                    "for": 10,
                                    "against": 12
                                }
                            },
                            "home": {
                                "played": 3,
                                "win": 1,
                                "draw": 2,
                                "lose": 0,
                                "goals": {
                                    "for": 7,
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
                                    "against": 8
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 15,
                            "team": {
                                "id": 96,
                                "name": "Toulouse",
                                "logo": "https://media-4.api-sports.io/football/teams/96.png"
                            },
                            "points": 6,
                            "goalsDiff": -2,
                            "group": "Ligue 1",
                            "form": "LDDLD",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 6,
                                "win": 1,
                                "draw": 3,
                                "lose": 2,
                                "goals": {
                                    "for": 6,
                                    "against": 8
                                }
                            },
                            "home": {
                                "played": 2,
                                "win": 0,
                                "draw": 2,
                                "lose": 0,
                                "goals": {
                                    "for": 3,
                                    "against": 3
                                }
                            },
                            "away": {
                                "played": 4,
                                "win": 1,
                                "draw": 1,
                                "lose": 2,
                                "goals": {
                                    "for": 3,
                                    "against": 5
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 16,
                            "team": {
                                "id": 116,
                                "name": "Lens",
                                "logo": "https://media-4.api-sports.io/football/teams/116.png"
                            },
                            "points": 4,
                            "goalsDiff": -6,
                            "group": "Ligue 1",
                            "form": "WLLLD",
                            "status": "same",
                            "description": "Ligue 1 (Promotion - Play Offs: )",
                            "all": {
                                "played": 6,
                                "win": 1,
                                "draw": 1,
                                "lose": 4,
                                "goals": {
                                    "for": 6,
                                    "against": 12
                                }
                            },
                            "home": {
                                "played": 3,
                                "win": 1,
                                "draw": 1,
                                "lose": 1,
                                "goals": {
                                    "for": 3,
                                    "against": 3
                                }
                            },
                            "away": {
                                "played": 3,
                                "win": 0,
                                "draw": 0,
                                "lose": 3,
                                "goals": {
                                    "for": 3,
                                    "against": 9
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 17,
                            "team": {
                                "id": 80,
                                "name": "Lyon",
                                "logo": "https://media-4.api-sports.io/football/teams/80.png"
                            },
                            "points": 2,
                            "goalsDiff": -8,
                            "group": "Ligue 1",
                            "form": "LDLDL",
                            "status": "same",
                            "description": "Relegation - Ligue 2",
                            "all": {
                                "played": 6,
                                "win": 0,
                                "draw": 2,
                                "lose": 4,
                                "goals": {
                                    "for": 3,
                                    "against": 11
                                }
                            },
                            "home": {
                                "played": 3,
                                "win": 0,
                                "draw": 1,
                                "lose": 2,
                                "goals": {
                                    "for": 2,
                                    "against": 8
                                }
                            },
                            "away": {
                                "played": 3,
                                "win": 0,
                                "draw": 1,
                                "lose": 2,
                                "goals": {
                                    "for": 1,
                                    "against": 3
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 18,
                            "team": {
                                "id": 99,
                                "name": "Clermont Foot",
                                "logo": "https://media-4.api-sports.io/football/teams/99.png"
                            },
                            "points": 1,
                            "goalsDiff": -7,
                            "group": "Ligue 1",
                            "form": "LLDLL",
                            "status": "same",
                            "description": "Relegation - Ligue 2",
                            "all": {
                                "played": 6,
                                "win": 0,
                                "draw": 1,
                                "lose": 5,
                                "goals": {
                                    "for": 5,
                                    "against": 12
                                }
                            },
                            "home": {
                                "played": 3,
                                "win": 0,
                                "draw": 0,
                                "lose": 3,
                                "goals": {
                                    "for": 2,
                                    "against": 6
                                }
                            },
                            "away": {
                                "played": 3,
                                "win": 0,
                                "draw": 1,
                                "lose": 2,
                                "goals": {
                                    "for": 3,
                                    "against": 6
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