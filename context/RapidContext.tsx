import * as React from 'react'

export interface IRapidContext {
    countryNames: string[],
    setCountryNames: (countryNames: string[]) => void,
    leagueIDs: number[]
    setLeagueIDs: (leagueIDs: number[]) => void
    teamIDs: number[]
    setTeamIDs: (teamIDs: number[]) => void
    playersIDs: number[]
    setPlayersIDs: (playersIDs: number[]) => void
    fixturesIDs: number[]
    setFixturesIDs: (teamIDs: number[]) => void
}

const rapidInitialContext: IRapidContext = {
    countryNames: [],
    setCountryNames: (countryNames: string[]) => {},
    leagueIDs: [],
    setLeagueIDs: (leagueIDs: number[]) => {},
    teamIDs: [],
    setTeamIDs: (teamIDs: number[]) => {},
    playersIDs: [],
    setPlayersIDs: (playersIDs: number[]) => {},
    fixturesIDs: [],
    setFixturesIDs: (teamIDs: number[]) => {},
}
export const RapidContext = React.createContext<IRapidContext>(rapidInitialContext)

export const RapidContextProvider = ({children}: {children: React.ReactNode}) => {

    const [countryNames, setCountryNames] = React.useState<string[]>([])
    const [leagueIDs, setLeagueIDs] = React.useState<number[]>([])
    const [teamIDs, setTeamIDs] = React.useState<number[]>([])
    const [playersIDs, setPlayersIDs] = React.useState<number[]>([])
    const [fixturesIDs, setFixturesIDs] = React.useState<number[]>([])


    React.useEffect(() => {console.log("UE leagueIDs", leagueIDs)}, [leagueIDs])
    React.useEffect(() => {console.log("UE teamIDs", teamIDs)}, [teamIDs])

    return (
        <RapidContext.Provider
            value={{
                countryNames,
                setCountryNames,
                leagueIDs,
                setLeagueIDs,
                teamIDs,
                setTeamIDs,
                playersIDs,
                setPlayersIDs,
                fixturesIDs,
                setFixturesIDs
            }}
        >
            {children}
        </RapidContext.Provider>
    )
}
