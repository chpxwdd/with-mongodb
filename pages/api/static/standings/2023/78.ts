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
        "league": "78",
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
                "id": 78,
                "name": "Bundesliga",
                "country": "Germany",
                "logo": "https://media-4.api-sports.io/football/leagues/78.png",
                "flag": "https://media-4.api-sports.io/flags/de.svg",
                "season": 2023,
                "standings": [
                    [
                        {
                            "rank": 1,
                            "team": {
                                "id": 157,
                                "name": "Bayern Munich",
                                "logo": "https://media-4.api-sports.io/football/teams/157.png"
                            },
                            "points": 13,
                            "goalsDiff": 14,
                            "group": "Bundesliga",
                            "form": "WDWWW",
                            "status": "same",
                            "description": "Promotion - Champions League (Group Stage: )",
                            "all": {
                                "played": 5,
                                "win": 4,
                                "draw": 1,
                                "lose": 0,
                                "goals": {
                                    "for": 18,
                                    "against": 4
                                }
                            },
                            "home": {
                                "played": 3,
                                "win": 2,
                                "draw": 1,
                                "lose": 0,
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
                                    "for": 6,
                                    "against": 1
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 2,
                            "team": {
                                "id": 168,
                                "name": "Bayer Leverkusen",
                                "logo": "https://media-4.api-sports.io/football/teams/168.png"
                            },
                            "points": 13,
                            "goalsDiff": 11,
                            "group": "Bundesliga",
                            "form": "WDWWW",
                            "status": "same",
                            "description": "Promotion - Champions League (Group Stage: )",
                            "all": {
                                "played": 5,
                                "win": 4,
                                "draw": 1,
                                "lose": 0,
                                "goals": {
                                    "for": 17,
                                    "against": 6
                                }
                            },
                            "home": {
                                "played": 3,
                                "win": 3,
                                "draw": 0,
                                "lose": 0,
                                "goals": {
                                    "for": 12,
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
                            "rank": 3,
                            "team": {
                                "id": 172,
                                "name": "VfB Stuttgart",
                                "logo": "https://media-4.api-sports.io/football/teams/172.png"
                            },
                            "points": 12,
                            "goalsDiff": 10,
                            "group": "Bundesliga",
                            "form": "WWWLW",
                            "status": "same",
                            "description": "Promotion - Champions League (Group Stage: )",
                            "all": {
                                "played": 5,
                                "win": 4,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 17,
                                    "against": 7
                                }
                            },
                            "home": {
                                "played": 3,
                                "win": 3,
                                "draw": 0,
                                "lose": 0,
                                "goals": {
                                    "for": 13,
                                    "against": 1
                                }
                            },
                            "away": {
                                "played": 2,
                                "win": 1,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 4,
                                    "against": 6
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 4,
                            "team": {
                                "id": 173,
                                "name": "RB Leipzig",
                                "logo": "https://media-4.api-sports.io/football/teams/173.png"
                            },
                            "points": 12,
                            "goalsDiff": 10,
                            "group": "Bundesliga",
                            "form": "WWWWL",
                            "status": "same",
                            "description": "Promotion - Champions League (Group Stage: )",
                            "all": {
                                "played": 5,
                                "win": 4,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 14,
                                    "against": 4
                                }
                            },
                            "home": {
                                "played": 2,
                                "win": 2,
                                "draw": 0,
                                "lose": 0,
                                "goals": {
                                    "for": 8,
                                    "against": 1
                                }
                            },
                            "away": {
                                "played": 3,
                                "win": 2,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 6,
                                    "against": 3
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 5,
                            "team": {
                                "id": 167,
                                "name": "1899 Hoffenheim",
                                "logo": "https://media-4.api-sports.io/football/teams/167.png"
                            },
                            "points": 12,
                            "goalsDiff": 6,
                            "group": "Bundesliga",
                            "form": "WWWWL",
                            "status": "same",
                            "description": "Promotion - Europa League (Group Stage: )",
                            "all": {
                                "played": 5,
                                "win": 4,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 12,
                                    "against": 6
                                }
                            },
                            "home": {
                                "played": 2,
                                "win": 1,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 4,
                                    "against": 3
                                }
                            },
                            "away": {
                                "played": 3,
                                "win": 3,
                                "draw": 0,
                                "lose": 0,
                                "goals": {
                                    "for": 8,
                                    "against": 3
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 6,
                            "team": {
                                "id": 165,
                                "name": "Borussia Dortmund",
                                "logo": "https://media-4.api-sports.io/football/teams/165.png"
                            },
                            "points": 11,
                            "goalsDiff": 4,
                            "group": "Bundesliga",
                            "form": "WWDDW",
                            "status": "same",
                            "description": "Promotion - Europa Conference League (Qualification: )",
                            "all": {
                                "played": 5,
                                "win": 3,
                                "draw": 2,
                                "lose": 0,
                                "goals": {
                                    "for": 9,
                                    "against": 5
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
                                "played": 2,
                                "win": 1,
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
                            "rank": 7,
                            "team": {
                                "id": 161,
                                "name": "VfL Wolfsburg",
                                "logo": "https://media-4.api-sports.io/football/teams/161.png"
                            },
                            "points": 9,
                            "goalsDiff": 1,
                            "group": "Bundesliga",
                            "form": "LWLWW",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 5,
                                "win": 3,
                                "draw": 0,
                                "lose": 2,
                                "goals": {
                                    "for": 7,
                                    "against": 6
                                }
                            },
                            "home": {
                                "played": 2,
                                "win": 2,
                                "draw": 0,
                                "lose": 0,
                                "goals": {
                                    "for": 4,
                                    "against": 1
                                }
                            },
                            "away": {
                                "played": 3,
                                "win": 1,
                                "draw": 0,
                                "lose": 2,
                                "goals": {
                                    "for": 3,
                                    "against": 5
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 8,
                            "team": {
                                "id": 169,
                                "name": "Eintracht Frankfurt",
                                "logo": "https://media-4.api-sports.io/football/teams/169.png"
                            },
                            "points": 7,
                            "goalsDiff": 1,
                            "group": "Bundesliga",
                            "form": "DDDDW",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 5,
                                "win": 1,
                                "draw": 4,
                                "lose": 0,
                                "goals": {
                                    "for": 4,
                                    "against": 3
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
                                "played": 2,
                                "win": 0,
                                "draw": 2,
                                "lose": 0,
                                "goals": {
                                    "for": 2,
                                    "against": 2
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 9,
                            "team": {
                                "id": 160,
                                "name": "SC Freiburg",
                                "logo": "https://media-4.api-sports.io/football/teams/160.png"
                            },
                            "points": 7,
                            "goalsDiff": -5,
                            "group": "Bundesliga",
                            "form": "DLLWW",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 5,
                                "win": 2,
                                "draw": 1,
                                "lose": 2,
                                "goals": {
                                    "for": 5,
                                    "against": 10
                                }
                            },
                            "home": {
                                "played": 2,
                                "win": 1,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 3,
                                    "against": 4
                                }
                            },
                            "away": {
                                "played": 3,
                                "win": 1,
                                "draw": 1,
                                "lose": 1,
                                "goals": {
                                    "for": 2,
                                    "against": 6
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 10,
                            "team": {
                                "id": 182,
                                "name": "Union Berlin",
                                "logo": "https://media-4.api-sports.io/football/teams/182.png"
                            },
                            "points": 6,
                            "goalsDiff": 0,
                            "group": "Bundesliga",
                            "form": "LLLWW",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 5,
                                "win": 2,
                                "draw": 0,
                                "lose": 3,
                                "goals": {
                                    "for": 9,
                                    "against": 9
                                }
                            },
                            "home": {
                                "played": 3,
                                "win": 1,
                                "draw": 0,
                                "lose": 2,
                                "goals": {
                                    "for": 4,
                                    "against": 6
                                }
                            },
                            "away": {
                                "played": 2,
                                "win": 1,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 5,
                                    "against": 3
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 11,
                            "team": {
                                "id": 162,
                                "name": "Werder Bremen",
                                "logo": "https://media-4.api-sports.io/football/teams/162.png"
                            },
                            "points": 6,
                            "goalsDiff": -2,
                            "group": "Bundesliga",
                            "form": "WLWLL",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 5,
                                "win": 2,
                                "draw": 0,
                                "lose": 3,
                                "goals": {
                                    "for": 8,
                                    "against": 10
                                }
                            },
                            "home": {
                                "played": 3,
                                "win": 2,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 6,
                                    "against": 5
                                }
                            },
                            "away": {
                                "played": 2,
                                "win": 0,
                                "draw": 0,
                                "lose": 2,
                                "goals": {
                                    "for": 2,
                                    "against": 5
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 12,
                            "team": {
                                "id": 170,
                                "name": "FC Augsburg",
                                "logo": "https://media-4.api-sports.io/football/teams/170.png"
                            },
                            "points": 5,
                            "goalsDiff": -4,
                            "group": "Bundesliga",
                            "form": "WLDLD",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 5,
                                "win": 1,
                                "draw": 2,
                                "lose": 2,
                                "goals": {
                                    "for": 9,
                                    "against": 13
                                }
                            },
                            "home": {
                                "played": 3,
                                "win": 1,
                                "draw": 2,
                                "lose": 0,
                                "goals": {
                                    "for": 8,
                                    "against": 7
                                }
                            },
                            "away": {
                                "played": 2,
                                "win": 0,
                                "draw": 0,
                                "lose": 2,
                                "goals": {
                                    "for": 1,
                                    "against": 6
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 13,
                            "team": {
                                "id": 180,
                                "name": "FC Heidenheim",
                                "logo": "https://media-4.api-sports.io/football/teams/180.png"
                            },
                            "points": 4,
                            "goalsDiff": -4,
                            "group": "Bundesliga",
                            "form": "LWDLL",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 5,
                                "win": 1,
                                "draw": 1,
                                "lose": 3,
                                "goals": {
                                    "for": 9,
                                    "against": 13
                                }
                            },
                            "home": {
                                "played": 2,
                                "win": 1,
                                "draw": 0,
                                "lose": 1,
                                "goals": {
                                    "for": 6,
                                    "against": 5
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
                            "rank": 14,
                            "team": {
                                "id": 176,
                                "name": "VfL BOCHUM",
                                "logo": "https://media-4.api-sports.io/football/teams/176.png"
                            },
                            "points": 3,
                            "goalsDiff": -12,
                            "group": "Bundesliga",
                            "form": "LDDDL",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 5,
                                "win": 0,
                                "draw": 3,
                                "lose": 2,
                                "goals": {
                                    "for": 4,
                                    "against": 16
                                }
                            },
                            "home": {
                                "played": 2,
                                "win": 0,
                                "draw": 2,
                                "lose": 0,
                                "goals": {
                                    "for": 2,
                                    "against": 2
                                }
                            },
                            "away": {
                                "played": 3,
                                "win": 0,
                                "draw": 1,
                                "lose": 2,
                                "goals": {
                                    "for": 2,
                                    "against": 14
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 15,
                            "team": {
                                "id": 163,
                                "name": "Borussia Monchengladbach",
                                "logo": "https://media-4.api-sports.io/football/teams/163.png"
                            },
                            "points": 2,
                            "goalsDiff": -5,
                            "group": "Bundesliga",
                            "form": "LDLLD",
                            "status": "same",
                            "description": null,
                            "all": {
                                "played": 5,
                                "win": 0,
                                "draw": 2,
                                "lose": 3,
                                "goals": {
                                    "for": 8,
                                    "against": 13
                                }
                            },
                            "home": {
                                "played": 3,
                                "win": 0,
                                "draw": 0,
                                "lose": 3,
                                "goals": {
                                    "for": 1,
                                    "against": 6
                                }
                            },
                            "away": {
                                "played": 2,
                                "win": 0,
                                "draw": 2,
                                "lose": 0,
                                "goals": {
                                    "for": 7,
                                    "against": 7
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 16,
                            "team": {
                                "id": 192,
                                "name": "FC Koln",
                                "logo": "https://media-4.api-sports.io/football/teams/192.png"
                            },
                            "points": 1,
                            "goalsDiff": -5,
                            "group": "Bundesliga",
                            "form": "LLDLL",
                            "status": "same",
                            "description": "Bundesliga (Relegation)",
                            "all": {
                                "played": 5,
                                "win": 0,
                                "draw": 1,
                                "lose": 4,
                                "goals": {
                                    "for": 4,
                                    "against": 9
                                }
                            },
                            "home": {
                                "played": 2,
                                "win": 0,
                                "draw": 0,
                                "lose": 2,
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
                                    "against": 4
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 17,
                            "team": {
                                "id": 181,
                                "name": "SV Darmstadt 98",
                                "logo": "https://media-4.api-sports.io/football/teams/181.png"
                            },
                            "points": 1,
                            "goalsDiff": -10,
                            "group": "Bundesliga",
                            "form": "LDLLL",
                            "status": "same",
                            "description": "Relegation - 2. Bundesliga",
                            "all": {
                                "played": 5,
                                "win": 0,
                                "draw": 1,
                                "lose": 4,
                                "goals": {
                                    "for": 6,
                                    "against": 16
                                }
                            },
                            "home": {
                                "played": 2,
                                "win": 0,
                                "draw": 1,
                                "lose": 1,
                                "goals": {
                                    "for": 4,
                                    "against": 7
                                }
                            },
                            "away": {
                                "played": 3,
                                "win": 0,
                                "draw": 0,
                                "lose": 3,
                                "goals": {
                                    "for": 2,
                                    "against": 9
                                }
                            },
                            "update": "2023-09-29T00:00:00+00:00"
                        },
                        {
                            "rank": 18,
                            "team": {
                                "id": 164,
                                "name": "FSV Mainz 05",
                                "logo": "https://media-4.api-sports.io/football/teams/164.png"
                            },
                            "points": 1,
                            "goalsDiff": -10,
                            "group": "Bundesliga",
                            "form": "LLLDL",
                            "status": "same",
                            "description": "Relegation - 2. Bundesliga",
                            "all": {
                                "played": 5,
                                "win": 0,
                                "draw": 1,
                                "lose": 4,
                                "goals": {
                                    "for": 4,
                                    "against": 14
                                }
                            },
                            "home": {
                                "played": 2,
                                "win": 0,
                                "draw": 1,
                                "lose": 1,
                                "goals": {
                                    "for": 2,
                                    "against": 4
                                }
                            },
                            "away": {
                                "played": 3,
                                "win": 0,
                                "draw": 0,
                                "lose": 3,
                                "goals": {
                                    "for": 2,
                                    "against": 10
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