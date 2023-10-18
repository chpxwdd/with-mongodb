import * as React from 'react';
import Image from 'next/image';
import {Button, Form, InputGroup, ListGroup} from 'react-bootstrap';
import worldFlag from '@/image/world.svg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch, faStar} from '@fortawesome/free-solid-svg-icons';
import {IStorageCountry, IStorageLeague, IStorageSeason, IStorageTeam} from '@/models/mongo/storage.types';
import {EStorageFavorite} from '@/constants/storage';
import {FootballContext} from '@/context/FootballContext';
import useFavorite from '@/hooks/useFavorite';

const FavoriteEditor = () => {
    const {country, setCountry, league, setLeague, season, setSeason, team, setTeam} = React.useContext(FootballContext)
    const [countries, setCountries] = React.useState<IStorageCountry[]>([])
    const [leagues, setLeagues] = React.useState<IStorageLeague[]>([])
    const [seasons, setSeasons] = React.useState<IStorageSeason[]>([])
    const [teams, setTeams] = React.useState<IStorageTeam[]>([])
    const [searchValue, setSearchValue] = React.useState<string>("")

    const {favorite: storageFavorite, add: addToFavorite, remove: removeFromFavorite} = useFavorite()

    React.useEffect(() => {
        fetchCountries(false)
        if (country?._id) fetchLeagues(country._id)
    }, [])

    const fetchCountries = async (hasWorld: boolean) => {
        const res = await fetch('/api/football/country', {method: 'GET', headers: {'Content-Type': 'application/json'}})
        const json = await res.json()

        if (!json.countries)
            throw new Error("fetchCountries error")

        setCountries(json.countries)
    }

    const fetchLeagues = async (country: string) => {
        const res = await fetch('/api/football/league/country', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({country})})
        const json = await res.json();

        if (!json.leagues)
            throw new Error("fetchLeagues error")

        setLeagues(json.leagues)
    }

    const handleClickCountry = (e: React.MouseEvent<Element, MouseEvent>, _id: string) => {
        e.preventDefault()
        e.stopPropagation()

        if (country !== null && _id === country._id) {
            setCountry(null)
            setLeagues([])
            return
        }

        const selectCountry: IStorageCountry = countries.find(item => item._id === _id)
        if (!selectCountry)
            return

        setCountry(selectCountry)
        fetchLeagues(_id)
    }

    const handleClickLeague = (e: React.MouseEvent<Element, MouseEvent>, _id: string) => {
        e.preventDefault()
        e.stopPropagation()
        league !== null && league._id === _id
            ? setLeague(null)
            : setLeague(leagues.filter(item => item._id === _id)[0])
        // fetchSeasons(_id)
    }

    const handleClickFavorite = async (e: React.MouseEvent<Element, MouseEvent>, _id: string, module: EStorageFavorite) => {
        e.preventDefault()
        e.stopPropagation()

        storageFavorite && storageFavorite[module].includes(_id)
            ? removeFromFavorite(_id, module)
            : addToFavorite(_id, module)
    }

    return (
        <section >
            {countries &&
                <Form className='form-sm'>
                    <InputGroup className="mb-3 input-group-sm">
                        <Form.Control placeholder="Search country" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)} aria-label="Search country" aria-describedby="search-addon" />
                        <InputGroup.Text id="search-addon"><FontAwesomeIcon icon={faSearch} width={10} height={10} /></InputGroup.Text>
                    </InputGroup>
                    <ListGroup className='mx-0 px-0 list-group-flush'>
                        {countries && countries
                            .filter(item => String(item.name).toLowerCase().includes(searchValue.toLowerCase()))
                            .map(countryItem =>
                                <ListGroup.Item key={countryItem._id} onClick={(e) => handleClickCountry(e, countryItem._id)} className={`p-0 bg-${country?._id === countryItem._id ? 'light' : 'default'} `}>
                                    <div className='d-flex justify-content-between py-1'>
                                        <div className='d-flex mx-3 align-items-center'>
                                            <Image src={countryItem.flag ? countryItem.flag : worldFlag} width={0} height={0} alt={countryItem.name} className='border border-1 border-default shadow rounded rounded-1' style={{objectFit: "contain", width: '20px', height: "auto"}} />
                                            <div className={`ms-2 fw-${country?._id === countryItem._id ? 'normal' : 'light'} `}>{countryItem.name}</div>
                                        </div>
                                        <div className='mx-2'><FontAwesomeIcon icon={faStar} width={14} height={14} onClick={(e) => handleClickFavorite(e, countryItem._id, EStorageFavorite.COUNTRY)} className={storageFavorite && storageFavorite[EStorageFavorite.COUNTRY].includes(countryItem._id) ? 'text-warning' : 'text-secondary'} />                                        </div>
                                    </div>
                                    {leagues && country?._id === countryItem._id && <>
                                        <hr className='mt-2 m-0 border-warning border border-1' />
                                        <ListGroup className='list-group-flush p-0 mx-0 mt-0'>
                                            {leagues.map(leagueItem =>
                                                <ListGroup.Item key={leagueItem._id} onClick={(e) => handleClickLeague(e, leagueItem._id)} className={`p-0 ps-4 bg-${league?._id === leagueItem._id ? 'light' : 'default'} `}>
                                                    <div className='d-flex justify-content-between py-1'>
                                                        <div className='d-flex  mx-2 align-items-center'>
                                                            <Image src={leagueItem?.logo || worldFlag} alt={leagueItem.name} width={0} height={0} style={{objectFit: "contain", width: '1rem', height: "1rem"}} />
                                                            <div className={`ms-2 fw-${league?._id === leagueItem._id ? 'normal' : 'light'} `}>{leagueItem.name}</div>
                                                        </div>
                                                        <div className='me-2'><FontAwesomeIcon icon={faStar} width={14} height={14} onClick={(e) => handleClickFavorite(e, leagueItem._id, EStorageFavorite.LEAGUE)} className={storageFavorite && storageFavorite[EStorageFavorite.LEAGUE].includes(leagueItem._id) ? 'text-warning' : 'text-secondary'} /></div>
                                                    </div>
                                                </ListGroup.Item>)}
                                        </ListGroup>
                                    </>}
                                </ListGroup.Item>
                            )
                        }
                    </ListGroup>
                </Form>
            }
        </section>
    )
}
export default FavoriteEditor