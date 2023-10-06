import {NextApiRequest, NextApiResponse} from "next";
export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        res.json({response})
    } catch (e) {console.error(e)}
}

const response = {
    "get": "fixtures",
    "parameters": {
        "team": "558",
        "season": "2023"
    },
    "errors": [],
    "results": 47,
    "paging": {
        "current": 1,
        "total": 1
    },
    "response": [
        {
            "fixture": {
                "id": 990030,
                "referee": null,
                "timezone": "UTC",
                "date": "2023-01-22T13:00:00+00:00",
                "timestamp": 1674392400,
                "periods": {
                    "first": null,
                    "second": null
                },
                "venue": {
                    "id": null,
                    "name": "Jebel Ali Centre of Excellence",
                    "city": "Dubai"
                },
                "status": {
                    "long": "Match Cancelled",
                    "short": "CANC",
                    "elapsed": null
                }
            },
            "league": {
                "id": 667,
                "name": "Friendlies Clubs",
                "country": "World",
                "logo": "https://media-4.api-sports.io/football/leagues/667.png",
                "flag": null,
                "season": 2023,
                "round": "Club Friendlies 3"
            },
            "teams": {
                "home": {
                    "id": 558,
                    "name": "Spartak Moscow",
                    "logo": "https://media-4.api-sports.io/football/teams/558.png",
                    "winner": null
                },
                "away": {
                    "id": 646,
                    "name": "Levski Sofia",
                    "logo": "https://media-4.api-sports.io/football/teams/646.png",
                    "winner": null
                }
            },
            "goals": {
                "home": null,
                "away": null
            },
            "score": {
                "halftime": {
                    "home": null,
                    "away": null
                },
                "fulltime": {
                    "home": null,
                    "away": null
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": null,
                    "away": null
                }
            }
        },
        {
            "fixture": {
                "id": 991452,
                "referee": null,
                "timezone": "UTC",
                "date": "2023-01-27T07:00:00+00:00",
                "timestamp": 1674802800,
                "periods": {
                    "first": 1674802800,
                    "second": 1674806400
                },
                "venue": {
                    "id": null,
                    "name": "Jebel Ali Centre of Excellence",
                    "city": "Dubai"
                },
                "status": {
                    "long": "Match Finished",
                    "short": "FT",
                    "elapsed": 90
                }
            },
            "league": {
                "id": 667,
                "name": "Friendlies Clubs",
                "country": "World",
                "logo": "https://media-4.api-sports.io/football/leagues/667.png",
                "flag": null,
                "season": 2023,
                "round": "Club Friendlies 3"
            },
            "teams": {
                "home": {
                    "id": 634,
                    "name": "Botev Plovdiv",
                    "logo": "https://media-4.api-sports.io/football/teams/634.png",
                    "winner": false
                },
                "away": {
                    "id": 558,
                    "name": "Spartak Moscow",
                    "logo": "https://media-4.api-sports.io/football/teams/558.png",
                    "winner": true
                }
            },
            "goals": {
                "home": 0,
                "away": 1
            },
            "score": {
                "halftime": {
                    "home": 0,
                    "away": 0
                },
                "fulltime": {
                    "home": 0,
                    "away": 1
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": null,
                    "away": null
                }
            }
        },
        {
            "fixture": {
                "id": 991668,
                "referee": null,
                "timezone": "UTC",
                "date": "2023-02-02T16:30:00+00:00",
                "timestamp": 1675355400,
                "periods": {
                    "first": 1675355400,
                    "second": 1675359000
                },
                "venue": {
                    "id": null,
                    "name": "Al Nahyan Stadium",
                    "city": "Abu Dhabi"
                },
                "status": {
                    "long": "Match Finished",
                    "short": "PEN",
                    "elapsed": 120
                }
            },
            "league": {
                "id": 667,
                "name": "Friendlies Clubs",
                "country": "World",
                "logo": "https://media-4.api-sports.io/football/leagues/667.png",
                "flag": null,
                "season": 2023,
                "round": "Club Friendlies 3"
            },
            "teams": {
                "home": {
                    "id": 779,
                    "name": "FC Rostov",
                    "logo": "https://media-4.api-sports.io/football/teams/779.png",
                    "winner": false
                },
                "away": {
                    "id": 558,
                    "name": "Spartak Moscow",
                    "logo": "https://media-4.api-sports.io/football/teams/558.png",
                    "winner": true
                }
            },
            "goals": {
                "home": 0,
                "away": 0
            },
            "score": {
                "halftime": {
                    "home": 0,
                    "away": 0
                },
                "fulltime": {
                    "home": 0,
                    "away": 0
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": 0,
                    "away": 1
                }
            }
        },
        {
            "fixture": {
                "id": 991804,
                "referee": null,
                "timezone": "UTC",
                "date": "2023-02-06T17:00:00+00:00",
                "timestamp": 1675702800,
                "periods": {
                    "first": 1675702800,
                    "second": 1675706400
                },
                "venue": {
                    "id": null,
                    "name": "Al Nahyan Stadium",
                    "city": "Abu Dhabi"
                },
                "status": {
                    "long": "Match Finished",
                    "short": "FT",
                    "elapsed": 90
                }
            },
            "league": {
                "id": 667,
                "name": "Friendlies Clubs",
                "country": "World",
                "logo": "https://media-4.api-sports.io/football/leagues/667.png",
                "flag": null,
                "season": 2023,
                "round": "Club Friendlies 3"
            },
            "teams": {
                "home": {
                    "id": 621,
                    "name": "Krasnodar",
                    "logo": "https://media-4.api-sports.io/football/teams/621.png",
                    "winner": false
                },
                "away": {
                    "id": 558,
                    "name": "Spartak Moscow",
                    "logo": "https://media-4.api-sports.io/football/teams/558.png",
                    "winner": true
                }
            },
            "goals": {
                "home": 0,
                "away": 4
            },
            "score": {
                "halftime": {
                    "home": null,
                    "away": null
                },
                "fulltime": {
                    "home": 0,
                    "away": 4
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": null,
                    "away": null
                }
            }
        },
        {
            "fixture": {
                "id": 991867,
                "referee": null,
                "timezone": "UTC",
                "date": "2023-02-10T16:00:00+00:00",
                "timestamp": 1676044800,
                "periods": {
                    "first": 1676044800,
                    "second": 1676048400
                },
                "venue": {
                    "id": null,
                    "name": "Baniyas Stadium",
                    "city": "Abu Dhabi"
                },
                "status": {
                    "long": "Match Finished",
                    "short": "FT",
                    "elapsed": 90
                }
            },
            "league": {
                "id": 667,
                "name": "Friendlies Clubs",
                "country": "World",
                "logo": "https://media-4.api-sports.io/football/leagues/667.png",
                "flag": null,
                "season": 2023,
                "round": "Club Friendlies 3"
            },
            "teams": {
                "home": {
                    "id": 558,
                    "name": "Spartak Moscow",
                    "logo": "https://media-4.api-sports.io/football/teams/558.png",
                    "winner": true
                },
                "away": {
                    "id": 2012,
                    "name": "PFC Sochi",
                    "logo": "https://media-4.api-sports.io/football/teams/2012.png",
                    "winner": false
                }
            },
            "goals": {
                "home": 2,
                "away": 0
            },
            "score": {
                "halftime": {
                    "home": null,
                    "away": null
                },
                "fulltime": {
                    "home": 2,
                    "away": 0
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": null,
                    "away": null
                }
            }
        },
        {
            "fixture": {
                "id": 994077,
                "referee": null,
                "timezone": "UTC",
                "date": "2023-01-22T00:00:00+00:00",
                "timestamp": 1674345600,
                "periods": {
                    "first": 1674345600,
                    "second": 1674349200
                },
                "venue": {
                    "id": null,
                    "name": "Jebel Ali Centre of Excellence",
                    "city": "Dubai"
                },
                "status": {
                    "long": "Match Finished",
                    "short": "FT",
                    "elapsed": 90
                }
            },
            "league": {
                "id": 667,
                "name": "Friendlies Clubs",
                "country": "World",
                "logo": "https://media-4.api-sports.io/football/leagues/667.png",
                "flag": null,
                "season": 2023,
                "round": "Club Friendlies 3"
            },
            "teams": {
                "home": {
                    "id": 558,
                    "name": "Spartak Moscow",
                    "logo": "https://media-4.api-sports.io/football/teams/558.png",
                    "winner": true
                },
                "away": {
                    "id": 4219,
                    "name": "Olmaliq",
                    "logo": "https://media-4.api-sports.io/football/teams/4219.png",
                    "winner": false
                }
            },
            "goals": {
                "home": 3,
                "away": 1
            },
            "score": {
                "halftime": {
                    "home": null,
                    "away": null
                },
                "fulltime": {
                    "home": 3,
                    "away": 1
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": null,
                    "away": null
                }
            }
        },
        {
            "fixture": {
                "id": 999578,
                "referee": null,
                "timezone": "UTC",
                "date": "2023-02-06T17:00:00+00:00",
                "timestamp": 1675702800,
                "periods": {
                    "first": 1675702800,
                    "second": 1675706400
                },
                "venue": {
                    "id": null,
                    "name": null,
                    "city": null
                },
                "status": {
                    "long": "Match Finished",
                    "short": "FT",
                    "elapsed": 90
                }
            },
            "league": {
                "id": 667,
                "name": "Friendlies Clubs",
                "country": "World",
                "logo": "https://media-4.api-sports.io/football/leagues/667.png",
                "flag": null,
                "season": 2023,
                "round": "Club Friendlies 5"
            },
            "teams": {
                "home": {
                    "id": 558,
                    "name": "Spartak Moscow",
                    "logo": "https://media-4.api-sports.io/football/teams/558.png",
                    "winner": true
                },
                "away": {
                    "id": 621,
                    "name": "Krasnodar",
                    "logo": "https://media-4.api-sports.io/football/teams/621.png",
                    "winner": false
                }
            },
            "goals": {
                "home": 4,
                "away": 0
            },
            "score": {
                "halftime": {
                    "home": 1,
                    "away": 0
                },
                "fulltime": {
                    "home": 4,
                    "away": 0
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": null,
                    "away": null
                }
            }
        },
        {
            "fixture": {
                "id": 1037369,
                "referee": null,
                "timezone": "UTC",
                "date": "2023-07-08T00:00:00+00:00",
                "timestamp": 1688774400,
                "periods": {
                    "first": null,
                    "second": null
                },
                "venue": {
                    "id": null,
                    "name": "TBC",
                    "city": "TBC"
                },
                "status": {
                    "long": "Match Cancelled",
                    "short": "CANC",
                    "elapsed": null
                }
            },
            "league": {
                "id": 667,
                "name": "Friendlies Clubs",
                "country": "World",
                "logo": "https://media-4.api-sports.io/football/leagues/667.png",
                "flag": null,
                "season": 2023,
                "round": "Club Friendlies 3"
            },
            "teams": {
                "home": {
                    "id": 6786,
                    "name": "Akron",
                    "logo": "https://media-4.api-sports.io/football/teams/6786.png",
                    "winner": null
                },
                "away": {
                    "id": 558,
                    "name": "Spartak Moscow",
                    "logo": "https://media-4.api-sports.io/football/teams/558.png",
                    "winner": null
                }
            },
            "goals": {
                "home": null,
                "away": null
            },
            "score": {
                "halftime": {
                    "home": null,
                    "away": null
                },
                "fulltime": {
                    "home": null,
                    "away": null
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": null,
                    "away": null
                }
            }
        },
        {
            "fixture": {
                "id": 1039021,
                "referee": null,
                "timezone": "UTC",
                "date": "2023-07-05T14:00:00+00:00",
                "timestamp": 1688565600,
                "periods": {
                    "first": 1688565600,
                    "second": 1688569200
                },
                "venue": {
                    "id": 19047,
                    "name": "Stadion SSYa pole No.2",
                    "city": "Moskva"
                },
                "status": {
                    "long": "Match Finished",
                    "short": "FT",
                    "elapsed": 90
                }
            },
            "league": {
                "id": 667,
                "name": "Friendlies Clubs",
                "country": "World",
                "logo": "https://media-4.api-sports.io/football/leagues/667.png",
                "flag": null,
                "season": 2023,
                "round": "Club Friendlies 3"
            },
            "teams": {
                "home": {
                    "id": 3985,
                    "name": "Torpedo Moskva",
                    "logo": "https://media-4.api-sports.io/football/teams/3985.png",
                    "winner": null
                },
                "away": {
                    "id": 558,
                    "name": "Spartak Moscow",
                    "logo": "https://media-4.api-sports.io/football/teams/558.png",
                    "winner": null
                }
            },
            "goals": {
                "home": 2,
                "away": 2
            },
            "score": {
                "halftime": {
                    "home": 2,
                    "away": 0
                },
                "fulltime": {
                    "home": 2,
                    "away": 2
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": null,
                    "away": null
                }
            }
        },
        {
            "fixture": {
                "id": 1042014,
                "referee": "A. Chistyakov",
                "timezone": "UTC",
                "date": "2023-07-23T14:30:00+00:00",
                "timestamp": 1690122600,
                "periods": {
                    "first": 1690122600,
                    "second": 1690126200
                },
                "venue": {
                    "id": 18673,
                    "name": "Otkritie Bank Arena",
                    "city": "Moskva"
                },
                "status": {
                    "long": "Match Finished",
                    "short": "FT",
                    "elapsed": 90
                }
            },
            "league": {
                "id": 235,
                "name": "Premier League",
                "country": "Russia",
                "logo": "https://media-4.api-sports.io/football/leagues/235.png",
                "flag": "https://media-4.api-sports.io/flags/ru.svg",
                "season": 2023,
                "round": "Regular Season - 1"
            },
            "teams": {
                "home": {
                    "id": 558,
                    "name": "Spartak Moscow",
                    "logo": "https://media-4.api-sports.io/football/teams/558.png",
                    "winner": true
                },
                "away": {
                    "id": 1080,
                    "name": "Orenburg",
                    "logo": "https://media-4.api-sports.io/football/teams/1080.png",
                    "winner": false
                }
            },
            "goals": {
                "home": 3,
                "away": 2
            },
            "score": {
                "halftime": {
                    "home": 1,
                    "away": 0
                },
                "fulltime": {
                    "home": 3,
                    "away": 2
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": null,
                    "away": null
                }
            }
        },
        {
            "fixture": {
                "id": 1042022,
                "referee": "P. Kukuian",
                "timezone": "UTC",
                "date": "2023-07-31T16:30:00+00:00",
                "timestamp": 1690821000,
                "periods": {
                    "first": 1690821000,
                    "second": 1690824600
                },
                "venue": {
                    "id": 18673,
                    "name": "Otkritie Bank Arena",
                    "city": "Moskva"
                },
                "status": {
                    "long": "Match Finished",
                    "short": "FT",
                    "elapsed": 90
                }
            },
            "league": {
                "id": 235,
                "name": "Premier League",
                "country": "Russia",
                "logo": "https://media-4.api-sports.io/football/leagues/235.png",
                "flag": "https://media-4.api-sports.io/flags/ru.svg",
                "season": 2023,
                "round": "Regular Season - 2"
            },
            "teams": {
                "home": {
                    "id": 558,
                    "name": "Spartak Moscow",
                    "logo": "https://media-4.api-sports.io/football/teams/558.png",
                    "winner": true
                },
                "away": {
                    "id": 2006,
                    "name": "Baltika",
                    "logo": "https://media-4.api-sports.io/football/teams/2006.png",
                    "winner": false
                }
            },
            "goals": {
                "home": 2,
                "away": 1
            },
            "score": {
                "halftime": {
                    "home": 1,
                    "away": 0
                },
                "fulltime": {
                    "home": 2,
                    "away": 1
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": null,
                    "away": null
                }
            }
        },
        {
            "fixture": {
                "id": 1042035,
                "referee": "E. Kukulyak",
                "timezone": "UTC",
                "date": "2023-08-05T14:30:00+00:00",
                "timestamp": 1691245800,
                "periods": {
                    "first": 1691245800,
                    "second": 1691249400
                },
                "venue": {
                    "id": 19911,
                    "name": "Ak Bars Arena",
                    "city": "Kazan'"
                },
                "status": {
                    "long": "Match Finished",
                    "short": "FT",
                    "elapsed": 90
                }
            },
            "league": {
                "id": 235,
                "name": "Premier League",
                "country": "Russia",
                "logo": "https://media-4.api-sports.io/football/leagues/235.png",
                "flag": "https://media-4.api-sports.io/flags/ru.svg",
                "season": 2023,
                "round": "Regular Season - 3"
            },
            "teams": {
                "home": {
                    "id": 1083,
                    "name": "Rubin",
                    "logo": "https://media-4.api-sports.io/football/teams/1083.png",
                    "winner": false
                },
                "away": {
                    "id": 558,
                    "name": "Spartak Moscow",
                    "logo": "https://media-4.api-sports.io/football/teams/558.png",
                    "winner": true
                }
            },
            "goals": {
                "home": 1,
                "away": 4
            },
            "score": {
                "halftime": {
                    "home": 1,
                    "away": 1
                },
                "fulltime": {
                    "home": 1,
                    "away": 4
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": null,
                    "away": null
                }
            }
        },
        {
            "fixture": {
                "id": 1042044,
                "referee": "K. Levnikov",
                "timezone": "UTC",
                "date": "2023-08-11T15:00:00+00:00",
                "timestamp": 1691766000,
                "periods": {
                    "first": 1691766000,
                    "second": 1691769600
                },
                "venue": {
                    "id": 1355,
                    "name": "Ekaterinburg Arena",
                    "city": "Ekaterinburg"
                },
                "status": {
                    "long": "Match Finished",
                    "short": "FT",
                    "elapsed": 90
                }
            },
            "league": {
                "id": 235,
                "name": "Premier League",
                "country": "Russia",
                "logo": "https://media-4.api-sports.io/football/leagues/235.png",
                "flag": "https://media-4.api-sports.io/flags/ru.svg",
                "season": 2023,
                "round": "Regular Season - 4"
            },
            "teams": {
                "home": {
                    "id": 1084,
                    "name": "Ural",
                    "logo": "https://media-4.api-sports.io/football/teams/1084.png",
                    "winner": true
                },
                "away": {
                    "id": 558,
                    "name": "Spartak Moscow",
                    "logo": "https://media-4.api-sports.io/football/teams/558.png",
                    "winner": false
                }
            },
            "goals": {
                "home": 3,
                "away": 2
            },
            "score": {
                "halftime": {
                    "home": 1,
                    "away": 0
                },
                "fulltime": {
                    "home": 3,
                    "away": 2
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": null,
                    "away": null
                }
            }
        },
        {
            "fixture": {
                "id": 1042046,
                "referee": "S. Karasev",
                "timezone": "UTC",
                "date": "2023-08-20T16:30:00+00:00",
                "timestamp": 1692549000,
                "periods": {
                    "first": 1692549000,
                    "second": 1692552600
                },
                "venue": {
                    "id": 18673,
                    "name": "Otkritie Bank Arena",
                    "city": "Moskva"
                },
                "status": {
                    "long": "Match Finished",
                    "short": "FT",
                    "elapsed": 90
                }
            },
            "league": {
                "id": 235,
                "name": "Premier League",
                "country": "Russia",
                "logo": "https://media-4.api-sports.io/football/leagues/235.png",
                "flag": "https://media-4.api-sports.io/flags/ru.svg",
                "season": 2023,
                "round": "Regular Season - 5"
            },
            "teams": {
                "home": {
                    "id": 558,
                    "name": "Spartak Moscow",
                    "logo": "https://media-4.api-sports.io/football/teams/558.png",
                    "winner": false
                },
                "away": {
                    "id": 596,
                    "name": "Zenit Saint Petersburg",
                    "logo": "https://media-4.api-sports.io/football/teams/596.png",
                    "winner": true
                }
            },
            "goals": {
                "home": 1,
                "away": 3
            },
            "score": {
                "halftime": {
                    "home": 0,
                    "away": 1
                },
                "fulltime": {
                    "home": 1,
                    "away": 3
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": null,
                    "away": null
                }
            }
        },
        {
            "fixture": {
                "id": 1042055,
                "referee": "R. Shafeev",
                "timezone": "UTC",
                "date": "2023-08-26T16:30:00+00:00",
                "timestamp": 1693067400,
                "periods": {
                    "first": 1693067400,
                    "second": 1693071000
                },
                "venue": {
                    "id": 18673,
                    "name": "Otkritie Bank Arena",
                    "city": "Moskva"
                },
                "status": {
                    "long": "Match Finished",
                    "short": "FT",
                    "elapsed": 90
                }
            },
            "league": {
                "id": 235,
                "name": "Premier League",
                "country": "Russia",
                "logo": "https://media-4.api-sports.io/football/leagues/235.png",
                "flag": "https://media-4.api-sports.io/flags/ru.svg",
                "season": 2023,
                "round": "Regular Season - 6"
            },
            "teams": {
                "home": {
                    "id": 558,
                    "name": "Spartak Moscow",
                    "logo": "https://media-4.api-sports.io/football/teams/558.png",
                    "winner": null
                },
                "away": {
                    "id": 1085,
                    "name": "Akhmat Grozny",
                    "logo": "https://media-4.api-sports.io/football/teams/1085.png",
                    "winner": null
                }
            },
            "goals": {
                "home": 0,
                "away": 0
            },
            "score": {
                "halftime": {
                    "home": 0,
                    "away": 0
                },
                "fulltime": {
                    "home": 0,
                    "away": 0
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": null,
                    "away": null
                }
            }
        },
        {
            "fixture": {
                "id": 1042063,
                "referee": "A. Sukhoy",
                "timezone": "UTC",
                "date": "2023-09-02T17:00:00+00:00",
                "timestamp": 1693674000,
                "periods": {
                    "first": 1693674000,
                    "second": 1693677600
                },
                "venue": {
                    "id": 1338,
                    "name": "Stadion FK Krasnodar",
                    "city": "Krasnodar"
                },
                "status": {
                    "long": "Match Finished",
                    "short": "FT",
                    "elapsed": 90
                }
            },
            "league": {
                "id": 235,
                "name": "Premier League",
                "country": "Russia",
                "logo": "https://media-4.api-sports.io/football/leagues/235.png",
                "flag": "https://media-4.api-sports.io/flags/ru.svg",
                "season": 2023,
                "round": "Regular Season - 7"
            },
            "teams": {
                "home": {
                    "id": 621,
                    "name": "Krasnodar",
                    "logo": "https://media-4.api-sports.io/football/teams/621.png",
                    "winner": true
                },
                "away": {
                    "id": 558,
                    "name": "Spartak Moscow",
                    "logo": "https://media-4.api-sports.io/football/teams/558.png",
                    "winner": false
                }
            },
            "goals": {
                "home": 2,
                "away": 0
            },
            "score": {
                "halftime": {
                    "home": 1,
                    "away": 0
                },
                "fulltime": {
                    "home": 2,
                    "away": 0
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": null,
                    "away": null
                }
            }
        },
        {
            "fixture": {
                "id": 1042074,
                "referee": null,
                "timezone": "UTC",
                "date": "2024-04-14T16:00:00+00:00",
                "timestamp": 1713110400,
                "periods": {
                    "first": null,
                    "second": null
                },
                "venue": {
                    "id": 2834,
                    "name": "Olimpiyskiy Stadion Fisht",
                    "city": "Sochi"
                },
                "status": {
                    "long": "Time to be defined",
                    "short": "TBD",
                    "elapsed": null
                }
            },
            "league": {
                "id": 235,
                "name": "Premier League",
                "country": "Russia",
                "logo": "https://media-4.api-sports.io/football/leagues/235.png",
                "flag": "https://media-4.api-sports.io/flags/ru.svg",
                "season": 2023,
                "round": "Regular Season - 24"
            },
            "teams": {
                "home": {
                    "id": 2012,
                    "name": "PFC Sochi",
                    "logo": "https://media-4.api-sports.io/football/teams/2012.png",
                    "winner": null
                },
                "away": {
                    "id": 558,
                    "name": "Spartak Moscow",
                    "logo": "https://media-4.api-sports.io/football/teams/558.png",
                    "winner": null
                }
            },
            "goals": {
                "home": null,
                "away": null
            },
            "score": {
                "halftime": {
                    "home": null,
                    "away": null
                },
                "fulltime": {
                    "home": null,
                    "away": null
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": null,
                    "away": null
                }
            }
        },
        {
            "fixture": {
                "id": 1042079,
                "referee": "P. Kukuian",
                "timezone": "UTC",
                "date": "2023-09-23T16:00:00+00:00",
                "timestamp": 1695484800,
                "periods": {
                    "first": 1695484800,
                    "second": 1695488400
                },
                "venue": {
                    "id": 18673,
                    "name": "Otkritie Bank Arena",
                    "city": "Moskva"
                },
                "status": {
                    "long": "Match Finished",
                    "short": "FT",
                    "elapsed": 90
                }
            },
            "league": {
                "id": 235,
                "name": "Premier League",
                "country": "Russia",
                "logo": "https://media-4.api-sports.io/football/leagues/235.png",
                "flag": "https://media-4.api-sports.io/flags/ru.svg",
                "season": 2023,
                "round": "Regular Season - 9"
            },
            "teams": {
                "home": {
                    "id": 558,
                    "name": "Spartak Moscow",
                    "logo": "https://media-4.api-sports.io/football/teams/558.png",
                    "winner": true
                },
                "away": {
                    "id": 1088,
                    "name": "Dinamo Moscow",
                    "logo": "https://media-4.api-sports.io/football/teams/1088.png",
                    "winner": false
                }
            },
            "goals": {
                "home": 1,
                "away": 0
            },
            "score": {
                "halftime": {
                    "home": 1,
                    "away": 0
                },
                "fulltime": {
                    "home": 1,
                    "away": 0
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": null,
                    "away": null
                }
            }
        },
        {
            "fixture": {
                "id": 1042087,
                "referee": "R. Shafeev",
                "timezone": "UTC",
                "date": "2023-10-01T13:30:00+00:00",
                "timestamp": 1696167000,
                "periods": {
                    "first": 1696167000,
                    "second": 1696170600
                },
                "venue": {
                    "id": 11911,
                    "name": "Solidarnost Arena",
                    "city": "Samara"
                },
                "status": {
                    "long": "Match Finished",
                    "short": "FT",
                    "elapsed": 90
                }
            },
            "league": {
                "id": 235,
                "name": "Premier League",
                "country": "Russia",
                "logo": "https://media-4.api-sports.io/football/leagues/235.png",
                "flag": "https://media-4.api-sports.io/flags/ru.svg",
                "season": 2023,
                "round": "Regular Season - 10"
            },
            "teams": {
                "home": {
                    "id": 1079,
                    "name": "Krylya Sovetov",
                    "logo": "https://media-4.api-sports.io/football/teams/1079.png",
                    "winner": true
                },
                "away": {
                    "id": 558,
                    "name": "Spartak Moscow",
                    "logo": "https://media-4.api-sports.io/football/teams/558.png",
                    "winner": false
                }
            },
            "goals": {
                "home": 4,
                "away": 0
            },
            "score": {
                "halftime": {
                    "home": 2,
                    "away": 0
                },
                "fulltime": {
                    "home": 4,
                    "away": 0
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": null,
                    "away": null
                }
            }
        },
        {
            "fixture": {
                "id": 1042094,
                "referee": null,
                "timezone": "UTC",
                "date": "2023-10-08T16:00:00+00:00",
                "timestamp": 1696780800,
                "periods": {
                    "first": null,
                    "second": null
                },
                "venue": {
                    "id": 18673,
                    "name": "Otkritie Bank Arena",
                    "city": "Moskva"
                },
                "status": {
                    "long": "Not Started",
                    "short": "NS",
                    "elapsed": null
                }
            },
            "league": {
                "id": 235,
                "name": "Premier League",
                "country": "Russia",
                "logo": "https://media-4.api-sports.io/football/leagues/235.png",
                "flag": "https://media-4.api-sports.io/flags/ru.svg",
                "season": 2023,
                "round": "Regular Season - 11"
            },
            "teams": {
                "home": {
                    "id": 558,
                    "name": "Spartak Moscow",
                    "logo": "https://media-4.api-sports.io/football/teams/558.png",
                    "winner": null
                },
                "away": {
                    "id": 555,
                    "name": "CSKA Moscow",
                    "logo": "https://media-4.api-sports.io/football/teams/555.png",
                    "winner": null
                }
            },
            "goals": {
                "home": null,
                "away": null
            },
            "score": {
                "halftime": {
                    "home": null,
                    "away": null
                },
                "fulltime": {
                    "home": null,
                    "away": null
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": null,
                    "away": null
                }
            }
        },
        {
            "fixture": {
                "id": 1042103,
                "referee": null,
                "timezone": "UTC",
                "date": "2023-10-22T11:00:00+00:00",
                "timestamp": 1697972400,
                "periods": {
                    "first": null,
                    "second": null
                },
                "venue": {
                    "id": 18673,
                    "name": "Otkritie Bank Arena",
                    "city": "Moskva"
                },
                "status": {
                    "long": "Not Started",
                    "short": "NS",
                    "elapsed": null
                }
            },
            "league": {
                "id": 235,
                "name": "Premier League",
                "country": "Russia",
                "logo": "https://media-4.api-sports.io/football/leagues/235.png",
                "flag": "https://media-4.api-sports.io/flags/ru.svg",
                "season": 2023,
                "round": "Regular Season - 12"
            },
            "teams": {
                "home": {
                    "id": 558,
                    "name": "Spartak Moscow",
                    "logo": "https://media-4.api-sports.io/football/teams/558.png",
                    "winner": null
                },
                "away": {
                    "id": 2011,
                    "name": "Nizhny Novgorod",
                    "logo": "https://media-4.api-sports.io/football/teams/2011.png",
                    "winner": null
                }
            },
            "goals": {
                "home": null,
                "away": null
            },
            "score": {
                "halftime": {
                    "home": null,
                    "away": null
                },
                "fulltime": {
                    "home": null,
                    "away": null
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": null,
                    "away": null
                }
            }
        },
        {
            "fixture": {
                "id": 1042117,
                "referee": null,
                "timezone": "UTC",
                "date": "2023-10-28T11:00:00+00:00",
                "timestamp": 1698490800,
                "periods": {
                    "first": null,
                    "second": null
                },
                "venue": {
                    "id": 1336,
                    "name": "Central'nyi Stadion Profsoyuzov",
                    "city": "Voronezh"
                },
                "status": {
                    "long": "Not Started",
                    "short": "NS",
                    "elapsed": null
                }
            },
            "league": {
                "id": 235,
                "name": "Premier League",
                "country": "Russia",
                "logo": "https://media-4.api-sports.io/football/leagues/235.png",
                "flag": "https://media-4.api-sports.io/flags/ru.svg",
                "season": 2023,
                "round": "Regular Season - 13"
            },
            "teams": {
                "home": {
                    "id": 1993,
                    "name": "Fakel Voronezh",
                    "logo": "https://media-4.api-sports.io/football/teams/1993.png",
                    "winner": null
                },
                "away": {
                    "id": 558,
                    "name": "Spartak Moscow",
                    "logo": "https://media-4.api-sports.io/football/teams/558.png",
                    "winner": null
                }
            },
            "goals": {
                "home": null,
                "away": null
            },
            "score": {
                "halftime": {
                    "home": null,
                    "away": null
                },
                "fulltime": {
                    "home": null,
                    "away": null
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": null,
                    "away": null
                }
            }
        },
        {
            "fixture": {
                "id": 1042120,
                "referee": null,
                "timezone": "UTC",
                "date": "2023-11-05T16:30:00+00:00",
                "timestamp": 1699201800,
                "periods": {
                    "first": null,
                    "second": null
                },
                "venue": {
                    "id": 1327,
                    "name": "RZD Arena",
                    "city": "Moskva"
                },
                "status": {
                    "long": "Not Started",
                    "short": "NS",
                    "elapsed": null
                }
            },
            "league": {
                "id": 235,
                "name": "Premier League",
                "country": "Russia",
                "logo": "https://media-4.api-sports.io/football/leagues/235.png",
                "flag": "https://media-4.api-sports.io/flags/ru.svg",
                "season": 2023,
                "round": "Regular Season - 14"
            },
            "teams": {
                "home": {
                    "id": 597,
                    "name": "Lokomotiv Moscow",
                    "logo": "https://media-4.api-sports.io/football/teams/597.png",
                    "winner": null
                },
                "away": {
                    "id": 558,
                    "name": "Spartak Moscow",
                    "logo": "https://media-4.api-sports.io/football/teams/558.png",
                    "winner": null
                }
            },
            "goals": {
                "home": null,
                "away": null
            },
            "score": {
                "halftime": {
                    "home": null,
                    "away": null
                },
                "fulltime": {
                    "home": null,
                    "away": null
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": null,
                    "away": null
                }
            }
        },
        {
            "fixture": {
                "id": 1042127,
                "referee": null,
                "timezone": "UTC",
                "date": "2023-11-12T16:30:00+00:00",
                "timestamp": 1699806600,
                "periods": {
                    "first": null,
                    "second": null
                },
                "venue": {
                    "id": 18673,
                    "name": "Otkritie Bank Arena",
                    "city": "Moskva"
                },
                "status": {
                    "long": "Not Started",
                    "short": "NS",
                    "elapsed": null
                }
            },
            "league": {
                "id": 235,
                "name": "Premier League",
                "country": "Russia",
                "logo": "https://media-4.api-sports.io/football/leagues/235.png",
                "flag": "https://media-4.api-sports.io/flags/ru.svg",
                "season": 2023,
                "round": "Regular Season - 15"
            },
            "teams": {
                "home": {
                    "id": 558,
                    "name": "Spartak Moscow",
                    "logo": "https://media-4.api-sports.io/football/teams/558.png",
                    "winner": null
                },
                "away": {
                    "id": 779,
                    "name": "FC Rostov",
                    "logo": "https://media-4.api-sports.io/football/teams/779.png",
                    "winner": null
                }
            },
            "goals": {
                "home": null,
                "away": null
            },
            "score": {
                "halftime": {
                    "home": null,
                    "away": null
                },
                "fulltime": {
                    "home": null,
                    "away": null
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": null,
                    "away": null
                }
            }
        },
        {
            "fixture": {
                "id": 1042139,
                "referee": null,
                "timezone": "UTC",
                "date": "2023-11-26T00:00:00+00:00",
                "timestamp": 1700956800,
                "periods": {
                    "first": null,
                    "second": null
                },
                "venue": {
                    "id": 1331,
                    "name": "Stadion Kaliningrad",
                    "city": "Kaliningrad"
                },
                "status": {
                    "long": "Time to be defined",
                    "short": "TBD",
                    "elapsed": null
                }
            },
            "league": {
                "id": 235,
                "name": "Premier League",
                "country": "Russia",
                "logo": "https://media-4.api-sports.io/football/leagues/235.png",
                "flag": "https://media-4.api-sports.io/flags/ru.svg",
                "season": 2023,
                "round": "Regular Season - 16"
            },
            "teams": {
                "home": {
                    "id": 2006,
                    "name": "Baltika",
                    "logo": "https://media-4.api-sports.io/football/teams/2006.png",
                    "winner": null
                },
                "away": {
                    "id": 558,
                    "name": "Spartak Moscow",
                    "logo": "https://media-4.api-sports.io/football/teams/558.png",
                    "winner": null
                }
            },
            "goals": {
                "home": null,
                "away": null
            },
            "score": {
                "halftime": {
                    "home": null,
                    "away": null
                },
                "fulltime": {
                    "home": null,
                    "away": null
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": null,
                    "away": null
                }
            }
        },
        {
            "fixture": {
                "id": 1042146,
                "referee": null,
                "timezone": "UTC",
                "date": "2023-12-03T00:00:00+00:00",
                "timestamp": 1701561600,
                "periods": {
                    "first": null,
                    "second": null
                },
                "venue": {
                    "id": 1353,
                    "name": "Akhmat Arena",
                    "city": "Groznyi"
                },
                "status": {
                    "long": "Time to be defined",
                    "short": "TBD",
                    "elapsed": null
                }
            },
            "league": {
                "id": 235,
                "name": "Premier League",
                "country": "Russia",
                "logo": "https://media-4.api-sports.io/football/leagues/235.png",
                "flag": "https://media-4.api-sports.io/flags/ru.svg",
                "season": 2023,
                "round": "Regular Season - 17"
            },
            "teams": {
                "home": {
                    "id": 1085,
                    "name": "Akhmat Grozny",
                    "logo": "https://media-4.api-sports.io/football/teams/1085.png",
                    "winner": null
                },
                "away": {
                    "id": 558,
                    "name": "Spartak Moscow",
                    "logo": "https://media-4.api-sports.io/football/teams/558.png",
                    "winner": null
                }
            },
            "goals": {
                "home": null,
                "away": null
            },
            "score": {
                "halftime": {
                    "home": null,
                    "away": null
                },
                "fulltime": {
                    "home": null,
                    "away": null
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": null,
                    "away": null
                }
            }
        },
        {
            "fixture": {
                "id": 1042151,
                "referee": null,
                "timezone": "UTC",
                "date": "2023-12-10T00:00:00+00:00",
                "timestamp": 1702166400,
                "periods": {
                    "first": null,
                    "second": null
                },
                "venue": {
                    "id": 18673,
                    "name": "Otkritie Bank Arena",
                    "city": "Moskva"
                },
                "status": {
                    "long": "Time to be defined",
                    "short": "TBD",
                    "elapsed": null
                }
            },
            "league": {
                "id": 235,
                "name": "Premier League",
                "country": "Russia",
                "logo": "https://media-4.api-sports.io/football/leagues/235.png",
                "flag": "https://media-4.api-sports.io/flags/ru.svg",
                "season": 2023,
                "round": "Regular Season - 18"
            },
            "teams": {
                "home": {
                    "id": 558,
                    "name": "Spartak Moscow",
                    "logo": "https://media-4.api-sports.io/football/teams/558.png",
                    "winner": null
                },
                "away": {
                    "id": 1079,
                    "name": "Krylya Sovetov",
                    "logo": "https://media-4.api-sports.io/football/teams/1079.png",
                    "winner": null
                }
            },
            "goals": {
                "home": null,
                "away": null
            },
            "score": {
                "halftime": {
                    "home": null,
                    "away": null
                },
                "fulltime": {
                    "home": null,
                    "away": null
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": null,
                    "away": null
                }
            }
        },
        {
            "fixture": {
                "id": 1042158,
                "referee": null,
                "timezone": "UTC",
                "date": "2024-03-03T00:00:00+00:00",
                "timestamp": 1709424000,
                "periods": {
                    "first": null,
                    "second": null
                },
                "venue": {
                    "id": 1356,
                    "name": "Saint-Petersburg Stadium",
                    "city": "St. Petersburg"
                },
                "status": {
                    "long": "Time to be defined",
                    "short": "TBD",
                    "elapsed": null
                }
            },
            "league": {
                "id": 235,
                "name": "Premier League",
                "country": "Russia",
                "logo": "https://media-4.api-sports.io/football/leagues/235.png",
                "flag": "https://media-4.api-sports.io/flags/ru.svg",
                "season": 2023,
                "round": "Regular Season - 19"
            },
            "teams": {
                "home": {
                    "id": 596,
                    "name": "Zenit Saint Petersburg",
                    "logo": "https://media-4.api-sports.io/football/teams/596.png",
                    "winner": null
                },
                "away": {
                    "id": 558,
                    "name": "Spartak Moscow",
                    "logo": "https://media-4.api-sports.io/football/teams/558.png",
                    "winner": null
                }
            },
            "goals": {
                "home": null,
                "away": null
            },
            "score": {
                "halftime": {
                    "home": null,
                    "away": null
                },
                "fulltime": {
                    "home": null,
                    "away": null
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": null,
                    "away": null
                }
            }
        },
        {
            "fixture": {
                "id": 1042166,
                "referee": null,
                "timezone": "UTC",
                "date": "2024-03-10T00:00:00+00:00",
                "timestamp": 1710028800,
                "periods": {
                    "first": null,
                    "second": null
                },
                "venue": {
                    "id": 18673,
                    "name": "Otkritie Bank Arena",
                    "city": "Moskva"
                },
                "status": {
                    "long": "Time to be defined",
                    "short": "TBD",
                    "elapsed": null
                }
            },
            "league": {
                "id": 235,
                "name": "Premier League",
                "country": "Russia",
                "logo": "https://media-4.api-sports.io/football/leagues/235.png",
                "flag": "https://media-4.api-sports.io/flags/ru.svg",
                "season": 2023,
                "round": "Regular Season - 20"
            },
            "teams": {
                "home": {
                    "id": 558,
                    "name": "Spartak Moscow",
                    "logo": "https://media-4.api-sports.io/football/teams/558.png",
                    "winner": null
                },
                "away": {
                    "id": 1993,
                    "name": "Fakel Voronezh",
                    "logo": "https://media-4.api-sports.io/football/teams/1993.png",
                    "winner": null
                }
            },
            "goals": {
                "home": null,
                "away": null
            },
            "score": {
                "halftime": {
                    "home": null,
                    "away": null
                },
                "fulltime": {
                    "home": null,
                    "away": null
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": null,
                    "away": null
                }
            }
        },
        {
            "fixture": {
                "id": 1042176,
                "referee": null,
                "timezone": "UTC",
                "date": "2024-03-17T00:00:00+00:00",
                "timestamp": 1710633600,
                "periods": {
                    "first": null,
                    "second": null
                },
                "venue": {
                    "id": 1333,
                    "name": "VEB Arena",
                    "city": "Moskva"
                },
                "status": {
                    "long": "Time to be defined",
                    "short": "TBD",
                    "elapsed": null
                }
            },
            "league": {
                "id": 235,
                "name": "Premier League",
                "country": "Russia",
                "logo": "https://media-4.api-sports.io/football/leagues/235.png",
                "flag": "https://media-4.api-sports.io/flags/ru.svg",
                "season": 2023,
                "round": "Regular Season - 21"
            },
            "teams": {
                "home": {
                    "id": 555,
                    "name": "CSKA Moscow",
                    "logo": "https://media-4.api-sports.io/football/teams/555.png",
                    "winner": null
                },
                "away": {
                    "id": 558,
                    "name": "Spartak Moscow",
                    "logo": "https://media-4.api-sports.io/football/teams/558.png",
                    "winner": null
                }
            },
            "goals": {
                "home": null,
                "away": null
            },
            "score": {
                "halftime": {
                    "home": null,
                    "away": null
                },
                "fulltime": {
                    "home": null,
                    "away": null
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": null,
                    "away": null
                }
            }
        },
        {
            "fixture": {
                "id": 1042182,
                "referee": null,
                "timezone": "UTC",
                "date": "2024-03-31T00:00:00+00:00",
                "timestamp": 1711843200,
                "periods": {
                    "first": null,
                    "second": null
                },
                "venue": {
                    "id": 18673,
                    "name": "Otkritie Bank Arena",
                    "city": "Moskva"
                },
                "status": {
                    "long": "Time to be defined",
                    "short": "TBD",
                    "elapsed": null
                }
            },
            "league": {
                "id": 235,
                "name": "Premier League",
                "country": "Russia",
                "logo": "https://media-4.api-sports.io/football/leagues/235.png",
                "flag": "https://media-4.api-sports.io/flags/ru.svg",
                "season": 2023,
                "round": "Regular Season - 22"
            },
            "teams": {
                "home": {
                    "id": 558,
                    "name": "Spartak Moscow",
                    "logo": "https://media-4.api-sports.io/football/teams/558.png",
                    "winner": null
                },
                "away": {
                    "id": 1084,
                    "name": "Ural",
                    "logo": "https://media-4.api-sports.io/football/teams/1084.png",
                    "winner": null
                }
            },
            "goals": {
                "home": null,
                "away": null
            },
            "score": {
                "halftime": {
                    "home": null,
                    "away": null
                },
                "fulltime": {
                    "home": null,
                    "away": null
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": null,
                    "away": null
                }
            }
        },
        {
            "fixture": {
                "id": 1042193,
                "referee": null,
                "timezone": "UTC",
                "date": "2024-04-07T00:00:00+00:00",
                "timestamp": 1712448000,
                "periods": {
                    "first": null,
                    "second": null
                },
                "venue": {
                    "id": 1334,
                    "name": "VTB Arena",
                    "city": "Moskva"
                },
                "status": {
                    "long": "Time to be defined",
                    "short": "TBD",
                    "elapsed": null
                }
            },
            "league": {
                "id": 235,
                "name": "Premier League",
                "country": "Russia",
                "logo": "https://media-4.api-sports.io/football/leagues/235.png",
                "flag": "https://media-4.api-sports.io/flags/ru.svg",
                "season": 2023,
                "round": "Regular Season - 23"
            },
            "teams": {
                "home": {
                    "id": 1088,
                    "name": "Dinamo Moscow",
                    "logo": "https://media-4.api-sports.io/football/teams/1088.png",
                    "winner": null
                },
                "away": {
                    "id": 558,
                    "name": "Spartak Moscow",
                    "logo": "https://media-4.api-sports.io/football/teams/558.png",
                    "winner": null
                }
            },
            "goals": {
                "home": null,
                "away": null
            },
            "score": {
                "halftime": {
                    "home": null,
                    "away": null
                },
                "fulltime": {
                    "home": null,
                    "away": null
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": null,
                    "away": null
                }
            }
        },
        {
            "fixture": {
                "id": 1042198,
                "referee": "A. Chistyakov",
                "timezone": "UTC",
                "date": "2023-09-16T16:00:00+00:00",
                "timestamp": 1694880000,
                "periods": {
                    "first": 1694880000,
                    "second": 1694883600
                },
                "venue": {
                    "id": 18673,
                    "name": "Otkritie Bank Arena",
                    "city": "Moskva"
                },
                "status": {
                    "long": "Match Finished",
                    "short": "FT",
                    "elapsed": 90
                }
            },
            "league": {
                "id": 235,
                "name": "Premier League",
                "country": "Russia",
                "logo": "https://media-4.api-sports.io/football/leagues/235.png",
                "flag": "https://media-4.api-sports.io/flags/ru.svg",
                "season": 2023,
                "round": "Regular Season - 8"
            },
            "teams": {
                "home": {
                    "id": 558,
                    "name": "Spartak Moscow",
                    "logo": "https://media-4.api-sports.io/football/teams/558.png",
                    "winner": true
                },
                "away": {
                    "id": 2012,
                    "name": "PFC Sochi",
                    "logo": "https://media-4.api-sports.io/football/teams/2012.png",
                    "winner": false
                }
            },
            "goals": {
                "home": 1,
                "away": 0
            },
            "score": {
                "halftime": {
                    "home": 0,
                    "away": 0
                },
                "fulltime": {
                    "home": 1,
                    "away": 0
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": null,
                    "away": null
                }
            }
        },
        {
            "fixture": {
                "id": 1042207,
                "referee": null,
                "timezone": "UTC",
                "date": "2024-04-21T00:00:00+00:00",
                "timestamp": 1713657600,
                "periods": {
                    "first": null,
                    "second": null
                },
                "venue": {
                    "id": 1339,
                    "name": "Rostov Arena",
                    "city": "Rostov-na-Donu"
                },
                "status": {
                    "long": "Time to be defined",
                    "short": "TBD",
                    "elapsed": null
                }
            },
            "league": {
                "id": 235,
                "name": "Premier League",
                "country": "Russia",
                "logo": "https://media-4.api-sports.io/football/leagues/235.png",
                "flag": "https://media-4.api-sports.io/flags/ru.svg",
                "season": 2023,
                "round": "Regular Season - 25"
            },
            "teams": {
                "home": {
                    "id": 779,
                    "name": "FC Rostov",
                    "logo": "https://media-4.api-sports.io/football/teams/779.png",
                    "winner": null
                },
                "away": {
                    "id": 558,
                    "name": "Spartak Moscow",
                    "logo": "https://media-4.api-sports.io/football/teams/558.png",
                    "winner": null
                }
            },
            "goals": {
                "home": null,
                "away": null
            },
            "score": {
                "halftime": {
                    "home": null,
                    "away": null
                },
                "fulltime": {
                    "home": null,
                    "away": null
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": null,
                    "away": null
                }
            }
        },
        {
            "fixture": {
                "id": 1042214,
                "referee": null,
                "timezone": "UTC",
                "date": "2024-04-28T00:00:00+00:00",
                "timestamp": 1714262400,
                "periods": {
                    "first": null,
                    "second": null
                },
                "venue": {
                    "id": 18673,
                    "name": "Otkritie Bank Arena",
                    "city": "Moskva"
                },
                "status": {
                    "long": "Time to be defined",
                    "short": "TBD",
                    "elapsed": null
                }
            },
            "league": {
                "id": 235,
                "name": "Premier League",
                "country": "Russia",
                "logo": "https://media-4.api-sports.io/football/leagues/235.png",
                "flag": "https://media-4.api-sports.io/flags/ru.svg",
                "season": 2023,
                "round": "Regular Season - 26"
            },
            "teams": {
                "home": {
                    "id": 558,
                    "name": "Spartak Moscow",
                    "logo": "https://media-4.api-sports.io/football/teams/558.png",
                    "winner": null
                },
                "away": {
                    "id": 597,
                    "name": "Lokomotiv Moscow",
                    "logo": "https://media-4.api-sports.io/football/teams/597.png",
                    "winner": null
                }
            },
            "goals": {
                "home": null,
                "away": null
            },
            "score": {
                "halftime": {
                    "home": null,
                    "away": null
                },
                "fulltime": {
                    "home": null,
                    "away": null
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": null,
                    "away": null
                }
            }
        },
        {
            "fixture": {
                "id": 1042226,
                "referee": null,
                "timezone": "UTC",
                "date": "2024-05-05T00:00:00+00:00",
                "timestamp": 1714867200,
                "periods": {
                    "first": null,
                    "second": null
                },
                "venue": {
                    "id": 2835,
                    "name": "Stadion Nizhny Novgorod",
                    "city": "Nizhniy Novgorod"
                },
                "status": {
                    "long": "Time to be defined",
                    "short": "TBD",
                    "elapsed": null
                }
            },
            "league": {
                "id": 235,
                "name": "Premier League",
                "country": "Russia",
                "logo": "https://media-4.api-sports.io/football/leagues/235.png",
                "flag": "https://media-4.api-sports.io/flags/ru.svg",
                "season": 2023,
                "round": "Regular Season - 27"
            },
            "teams": {
                "home": {
                    "id": 2011,
                    "name": "Nizhny Novgorod",
                    "logo": "https://media-4.api-sports.io/football/teams/2011.png",
                    "winner": null
                },
                "away": {
                    "id": 558,
                    "name": "Spartak Moscow",
                    "logo": "https://media-4.api-sports.io/football/teams/558.png",
                    "winner": null
                }
            },
            "goals": {
                "home": null,
                "away": null
            },
            "score": {
                "halftime": {
                    "home": null,
                    "away": null
                },
                "fulltime": {
                    "home": null,
                    "away": null
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": null,
                    "away": null
                }
            }
        },
        {
            "fixture": {
                "id": 1042231,
                "referee": null,
                "timezone": "UTC",
                "date": "2024-05-12T00:00:00+00:00",
                "timestamp": 1715472000,
                "periods": {
                    "first": null,
                    "second": null
                },
                "venue": {
                    "id": 18673,
                    "name": "Otkritie Bank Arena",
                    "city": "Moskva"
                },
                "status": {
                    "long": "Time to be defined",
                    "short": "TBD",
                    "elapsed": null
                }
            },
            "league": {
                "id": 235,
                "name": "Premier League",
                "country": "Russia",
                "logo": "https://media-4.api-sports.io/football/leagues/235.png",
                "flag": "https://media-4.api-sports.io/flags/ru.svg",
                "season": 2023,
                "round": "Regular Season - 28"
            },
            "teams": {
                "home": {
                    "id": 558,
                    "name": "Spartak Moscow",
                    "logo": "https://media-4.api-sports.io/football/teams/558.png",
                    "winner": null
                },
                "away": {
                    "id": 621,
                    "name": "Krasnodar",
                    "logo": "https://media-4.api-sports.io/football/teams/621.png",
                    "winner": null
                }
            },
            "goals": {
                "home": null,
                "away": null
            },
            "score": {
                "halftime": {
                    "home": null,
                    "away": null
                },
                "fulltime": {
                    "home": null,
                    "away": null
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": null,
                    "away": null
                }
            }
        },
        {
            "fixture": {
                "id": 1042238,
                "referee": null,
                "timezone": "UTC",
                "date": "2024-05-19T00:00:00+00:00",
                "timestamp": 1716076800,
                "periods": {
                    "first": null,
                    "second": null
                },
                "venue": {
                    "id": 18673,
                    "name": "Otkritie Bank Arena",
                    "city": "Moskva"
                },
                "status": {
                    "long": "Time to be defined",
                    "short": "TBD",
                    "elapsed": null
                }
            },
            "league": {
                "id": 235,
                "name": "Premier League",
                "country": "Russia",
                "logo": "https://media-4.api-sports.io/football/leagues/235.png",
                "flag": "https://media-4.api-sports.io/flags/ru.svg",
                "season": 2023,
                "round": "Regular Season - 29"
            },
            "teams": {
                "home": {
                    "id": 558,
                    "name": "Spartak Moscow",
                    "logo": "https://media-4.api-sports.io/football/teams/558.png",
                    "winner": null
                },
                "away": {
                    "id": 1083,
                    "name": "Rubin",
                    "logo": "https://media-4.api-sports.io/football/teams/1083.png",
                    "winner": null
                }
            },
            "goals": {
                "home": null,
                "away": null
            },
            "score": {
                "halftime": {
                    "home": null,
                    "away": null
                },
                "fulltime": {
                    "home": null,
                    "away": null
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": null,
                    "away": null
                }
            }
        },
        {
            "fixture": {
                "id": 1042253,
                "referee": null,
                "timezone": "UTC",
                "date": "2024-05-25T00:00:00+00:00",
                "timestamp": 1716595200,
                "periods": {
                    "first": null,
                    "second": null
                },
                "venue": {
                    "id": 1342,
                    "name": "Stadion Gazovik",
                    "city": "Rostoshi"
                },
                "status": {
                    "long": "Time to be defined",
                    "short": "TBD",
                    "elapsed": null
                }
            },
            "league": {
                "id": 235,
                "name": "Premier League",
                "country": "Russia",
                "logo": "https://media-4.api-sports.io/football/leagues/235.png",
                "flag": "https://media-4.api-sports.io/flags/ru.svg",
                "season": 2023,
                "round": "Regular Season - 30"
            },
            "teams": {
                "home": {
                    "id": 1080,
                    "name": "Orenburg",
                    "logo": "https://media-4.api-sports.io/football/teams/1080.png",
                    "winner": null
                },
                "away": {
                    "id": 558,
                    "name": "Spartak Moscow",
                    "logo": "https://media-4.api-sports.io/football/teams/558.png",
                    "winner": null
                }
            },
            "goals": {
                "home": null,
                "away": null
            },
            "score": {
                "halftime": {
                    "home": null,
                    "away": null
                },
                "fulltime": {
                    "home": null,
                    "away": null
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": null,
                    "away": null
                }
            }
        },
        {
            "fixture": {
                "id": 1060648,
                "referee": "A. Sukhoy",
                "timezone": "UTC",
                "date": "2023-07-27T17:00:00+00:00",
                "timestamp": 1690477200,
                "periods": {
                    "first": 1690477200,
                    "second": 1690480800
                },
                "venue": {
                    "id": 1338,
                    "name": "Stadion FK Krasnodar",
                    "city": "Krasnodar"
                },
                "status": {
                    "long": "Match Finished",
                    "short": "FT",
                    "elapsed": 90
                }
            },
            "league": {
                "id": 237,
                "name": "Cup",
                "country": "Russia",
                "logo": "https://media-4.api-sports.io/football/leagues/237.png",
                "flag": "https://media-4.api-sports.io/flags/ru.svg",
                "season": 2023,
                "round": "Premier League Path - Group Stage - 1"
            },
            "teams": {
                "home": {
                    "id": 621,
                    "name": "Krasnodar",
                    "logo": "https://media-4.api-sports.io/football/teams/621.png",
                    "winner": false
                },
                "away": {
                    "id": 558,
                    "name": "Spartak Moscow",
                    "logo": "https://media-4.api-sports.io/football/teams/558.png",
                    "winner": true
                }
            },
            "goals": {
                "home": 1,
                "away": 2
            },
            "score": {
                "halftime": {
                    "home": 0,
                    "away": 1
                },
                "fulltime": {
                    "home": 1,
                    "away": 2
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": null,
                    "away": null
                }
            }
        },
        {
            "fixture": {
                "id": 1060651,
                "referee": "S. Tsyganok",
                "timezone": "UTC",
                "date": "2023-08-08T17:45:00+00:00",
                "timestamp": 1691516700,
                "periods": {
                    "first": 1691516700,
                    "second": 1691520300
                },
                "venue": {
                    "id": 18673,
                    "name": "Otkritie Bank Arena",
                    "city": "Moskva"
                },
                "status": {
                    "long": "Match Finished",
                    "short": "FT",
                    "elapsed": 90
                }
            },
            "league": {
                "id": 237,
                "name": "Cup",
                "country": "Russia",
                "logo": "https://media-4.api-sports.io/football/leagues/237.png",
                "flag": "https://media-4.api-sports.io/flags/ru.svg",
                "season": 2023,
                "round": "Premier League Path - Group Stage - 2"
            },
            "teams": {
                "home": {
                    "id": 558,
                    "name": "Spartak Moscow",
                    "logo": "https://media-4.api-sports.io/football/teams/558.png",
                    "winner": true
                },
                "away": {
                    "id": 2011,
                    "name": "Nizhny Novgorod",
                    "logo": "https://media-4.api-sports.io/football/teams/2011.png",
                    "winner": false
                }
            },
            "goals": {
                "home": 5,
                "away": 4
            },
            "score": {
                "halftime": {
                    "home": 3,
                    "away": 1
                },
                "fulltime": {
                    "home": 5,
                    "away": 4
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": null,
                    "away": null
                }
            }
        },
        {
            "fixture": {
                "id": 1060660,
                "referee": "V. Meshkov",
                "timezone": "UTC",
                "date": "2023-08-29T16:30:00+00:00",
                "timestamp": 1693326600,
                "periods": {
                    "first": 1693326600,
                    "second": 1693330200
                },
                "venue": {
                    "id": 18673,
                    "name": "Otkritie Bank Arena",
                    "city": "Moskva"
                },
                "status": {
                    "long": "Match Finished",
                    "short": "FT",
                    "elapsed": 90
                }
            },
            "league": {
                "id": 237,
                "name": "Cup",
                "country": "Russia",
                "logo": "https://media-4.api-sports.io/football/leagues/237.png",
                "flag": "https://media-4.api-sports.io/flags/ru.svg",
                "season": 2023,
                "round": "Premier League Path - Group Stage - 2"
            },
            "teams": {
                "home": {
                    "id": 558,
                    "name": "Spartak Moscow",
                    "logo": "https://media-4.api-sports.io/football/teams/558.png",
                    "winner": true
                },
                "away": {
                    "id": 1088,
                    "name": "Dinamo Moscow",
                    "logo": "https://media-4.api-sports.io/football/teams/1088.png",
                    "winner": false
                }
            },
            "goals": {
                "home": 4,
                "away": 1
            },
            "score": {
                "halftime": {
                    "home": 4,
                    "away": 0
                },
                "fulltime": {
                    "home": 4,
                    "away": 1
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": null,
                    "away": null
                }
            }
        },
        {
            "fixture": {
                "id": 1060672,
                "referee": "E. Bulanov",
                "timezone": "UTC",
                "date": "2023-09-19T14:15:00+00:00",
                "timestamp": 1695132900,
                "periods": {
                    "first": 1695132900,
                    "second": 1695136500
                },
                "venue": {
                    "id": 2835,
                    "name": "Stadion Nizhny Novgorod",
                    "city": "Nizhniy Novgorod"
                },
                "status": {
                    "long": "Match Finished",
                    "short": "FT",
                    "elapsed": 90
                }
            },
            "league": {
                "id": 237,
                "name": "Cup",
                "country": "Russia",
                "logo": "https://media-4.api-sports.io/football/leagues/237.png",
                "flag": "https://media-4.api-sports.io/flags/ru.svg",
                "season": 2023,
                "round": "Premier League Path - Group Stage - 3"
            },
            "teams": {
                "home": {
                    "id": 2011,
                    "name": "Nizhny Novgorod",
                    "logo": "https://media-4.api-sports.io/football/teams/2011.png",
                    "winner": false
                },
                "away": {
                    "id": 558,
                    "name": "Spartak Moscow",
                    "logo": "https://media-4.api-sports.io/football/teams/558.png",
                    "winner": true
                }
            },
            "goals": {
                "home": 0,
                "away": 3
            },
            "score": {
                "halftime": {
                    "home": 0,
                    "away": 1
                },
                "fulltime": {
                    "home": 0,
                    "away": 3
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": null,
                    "away": null
                }
            }
        },
        {
            "fixture": {
                "id": 1060679,
                "referee": "V. Moskalev",
                "timezone": "UTC",
                "date": "2023-10-04T13:45:00+00:00",
                "timestamp": 1696427100,
                "periods": {
                    "first": 1696427100,
                    "second": 1696430700
                },
                "venue": {
                    "id": 1334,
                    "name": "VTB Arena",
                    "city": "Moskva"
                },
                "status": {
                    "long": "Match Finished",
                    "short": "FT",
                    "elapsed": 90
                }
            },
            "league": {
                "id": 237,
                "name": "Cup",
                "country": "Russia",
                "logo": "https://media-4.api-sports.io/football/leagues/237.png",
                "flag": "https://media-4.api-sports.io/flags/ru.svg",
                "season": 2023,
                "round": "Premier League Path - Group Stage - 4"
            },
            "teams": {
                "home": {
                    "id": 1088,
                    "name": "Dinamo Moscow",
                    "logo": "https://media-4.api-sports.io/football/teams/1088.png",
                    "winner": true
                },
                "away": {
                    "id": 558,
                    "name": "Spartak Moscow",
                    "logo": "https://media-4.api-sports.io/football/teams/558.png",
                    "winner": false
                }
            },
            "goals": {
                "home": 3,
                "away": 0
            },
            "score": {
                "halftime": {
                    "home": 2,
                    "away": 0
                },
                "fulltime": {
                    "home": 3,
                    "away": 0
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": null,
                    "away": null
                }
            }
        },
        {
            "fixture": {
                "id": 1060688,
                "referee": null,
                "timezone": "UTC",
                "date": "2023-11-01T17:45:00+00:00",
                "timestamp": 1698860700,
                "periods": {
                    "first": null,
                    "second": null
                },
                "venue": {
                    "id": 18673,
                    "name": "Otkritie Bank Arena",
                    "city": "Moskva"
                },
                "status": {
                    "long": "Not Started",
                    "short": "NS",
                    "elapsed": null
                }
            },
            "league": {
                "id": 237,
                "name": "Cup",
                "country": "Russia",
                "logo": "https://media-4.api-sports.io/football/leagues/237.png",
                "flag": "https://media-4.api-sports.io/flags/ru.svg",
                "season": 2023,
                "round": "Premier League Path - Group Stage - 5"
            },
            "teams": {
                "home": {
                    "id": 558,
                    "name": "Spartak Moscow",
                    "logo": "https://media-4.api-sports.io/football/teams/558.png",
                    "winner": null
                },
                "away": {
                    "id": 621,
                    "name": "Krasnodar",
                    "logo": "https://media-4.api-sports.io/football/teams/621.png",
                    "winner": null
                }
            },
            "goals": {
                "home": null,
                "away": null
            },
            "score": {
                "halftime": {
                    "home": null,
                    "away": null
                },
                "fulltime": {
                    "home": null,
                    "away": null
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": null,
                    "away": null
                }
            }
        },
        {
            "fixture": {
                "id": 1072473,
                "referee": null,
                "timezone": "UTC",
                "date": "2023-07-18T18:00:00+00:00",
                "timestamp": 1689703200,
                "periods": {
                    "first": null,
                    "second": null
                },
                "venue": {
                    "id": 18673,
                    "name": "Otkritie Bank Arena",
                    "city": "Moskva"
                },
                "status": {
                    "long": "Match Cancelled",
                    "short": "CANC",
                    "elapsed": null
                }
            },
            "league": {
                "id": 667,
                "name": "Friendlies Clubs",
                "country": "World",
                "logo": "https://media-4.api-sports.io/football/leagues/667.png",
                "flag": null,
                "season": 2023,
                "round": "Club Friendlies 3"
            },
            "teams": {
                "home": {
                    "id": 558,
                    "name": "Spartak Moscow",
                    "logo": "https://media-4.api-sports.io/football/teams/558.png",
                    "winner": null
                },
                "away": {
                    "id": 12240,
                    "name": "Neftchi",
                    "logo": "https://media-4.api-sports.io/football/teams/12240.png",
                    "winner": null
                }
            },
            "goals": {
                "home": null,
                "away": null
            },
            "score": {
                "halftime": {
                    "home": null,
                    "away": null
                },
                "fulltime": {
                    "home": null,
                    "away": null
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": null,
                    "away": null
                }
            }
        },
        {
            "fixture": {
                "id": 1073457,
                "referee": null,
                "timezone": "UTC",
                "date": "2023-07-18T18:00:00+00:00",
                "timestamp": 1689703200,
                "periods": {
                    "first": 1689703200,
                    "second": 1689706800
                },
                "venue": {
                    "id": 18673,
                    "name": "Otkritie Bank Arena",
                    "city": "Moskva"
                },
                "status": {
                    "long": "Match Finished",
                    "short": "FT",
                    "elapsed": 90
                }
            },
            "league": {
                "id": 667,
                "name": "Friendlies Clubs",
                "country": "World",
                "logo": "https://media-4.api-sports.io/football/leagues/667.png",
                "flag": null,
                "season": 2023,
                "round": "Club Friendlies 3"
            },
            "teams": {
                "home": {
                    "id": 558,
                    "name": "Spartak Moscow",
                    "logo": "https://media-4.api-sports.io/football/teams/558.png",
                    "winner": true
                },
                "away": {
                    "id": 2270,
                    "name": "Neftchi Baku",
                    "logo": "https://media-4.api-sports.io/football/teams/2270.png",
                    "winner": false
                }
            },
            "goals": {
                "home": 2,
                "away": 0
            },
            "score": {
                "halftime": {
                    "home": 2,
                    "away": 0
                },
                "fulltime": {
                    "home": 2,
                    "away": 0
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": null,
                    "away": null
                }
            }
        }
    ]
}