import Link from 'next/link'
import {Nav, Navbar, Container, Button, NavDropdown} from 'react-bootstrap'
import {signOut, useSession} from 'next-auth/react'

const TopNavbar = () => {

    const {data: session, status} = useSession()

    return (
        <Navbar bg="dark" variant="dark" fixed='top' className='mb-2'>
            {/* <Container fluid> */}
            <Container >
                <Navbar.Brand href="/">Football API</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link" href="/">Home</Link>
                        {status === "authenticated" && <>
                            <Link className="nav-link" href="/football/fixtures">Fixtures</Link>
                            <NavDropdown title="Statistics" id="user-nav-dropdown">
                                <NavDropdown.Item href="/statistics">Summary</NavDropdown.Item>
                                <NavDropdown.Item href="/statistics/leagues">Leagues</NavDropdown.Item>
                                <NavDropdown.Item href="/statistic/teams">Teams</NavDropdown.Item>
                                <NavDropdown.Item href="/statistic/players">Players</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Profile" id="user-nav-dropdown">
                                <NavDropdown.Item href="/user/favorites">Favorites</NavDropdown.Item>
                                <NavDropdown.Item href="/user/profile">Settings</NavDropdown.Item>
                            </NavDropdown>
                        </>}
                    </Nav>
                    <Nav>
                        {status === "authenticated" && <>
                            <Link className='nav-link' href="/user/profile">{session.user.email}</Link>
                            <Button className="btn-sm btn-dark" onClick={() => signOut({redirect: true, callbackUrl: '/'})}>Sign out</Button>
                        </>}
                        {status === "unauthenticated" && <>
                            <Link className="nav-link" href="/auth/login">Sign In</Link>
                            <Link className="nav-link" href="/auth/register">Sign Up</Link>
                        </>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}
export default TopNavbar
