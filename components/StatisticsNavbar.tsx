import Link from 'next/link'
import {Nav, Navbar, Container, Button} from 'react-bootstrap'
import {signOut, useSession} from 'next-auth/react'
export default () => {
    const {data: session, status} = useSession()
    return (
        <Navbar bg="dark" variant="dark" className='mb-3 rounded rounded-2 shadow-sm  '>
            <Container className=' justify-content-between' >
                <Nav className="me-auto">
                    <Link className="nav-link" href="/football/statistic">Summary</Link>
                    <Link className="nav-link" href="/football/statistic/league">Leagues</Link>
                    <Link className="nav-link" href="/football/statistic/team">Teams</Link>
                    <Link className="nav-link" href="/football/statistic/player">Players</Link>
                </Nav>
            </Container >
        </Navbar >
    )
}
