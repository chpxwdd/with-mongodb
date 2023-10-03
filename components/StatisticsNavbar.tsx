import Link from 'next/link'
import {Nav, Navbar, Container, Button} from 'react-bootstrap'
import {signOut, useSession} from 'next-auth/react'
const StatisticsNavbar = () => {

    const {data: session, status} = useSession()

    return (
        <Navbar bg="light" variant="default" className='mb-3 rounded rounded-2 shadow-sm border '>
            <Container className=' justify-content-between'>
                <Nav className="me-auto">
                    <Link className="nav-link" href="/football/statistics">Statistics</Link>
                    <Link className="nav-link" href="/football/statistics/league">Leagues</Link>
                    <Link className="nav-link" href="/football/statistics/team">Teams</Link>
                    <Link className="nav-link" href="/football/statistics/player">Players</Link>
                </Nav>
            </Container>
        </Navbar >
    )
}
export default StatisticsNavbar
