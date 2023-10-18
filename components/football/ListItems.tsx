import * as React from 'react';
import {RapidContext} from '@/context/RapidContext';

const ListItems = () => {
    const {teamIDs, leagueIDs} = React.useContext(RapidContext)
    return (
        <>
            {leagueIDs.join(" | ")}<br />{teamIDs.join(" | ")}
        </>
    )
}

export default ListItems;