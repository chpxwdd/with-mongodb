import Link from 'next/link'
import {Nav, Navbar, Container, Button} from 'react-bootstrap'
import {signOut, useSession} from 'next-auth/react'
const Topnavbar = () => {

    const {data: session, status} = useSession()

    return (
        <Navbar bg="dark" sticky="top" variant="dark">
            <Container fluid>
                <Navbar.Brand href="/">Football API</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link" href="/">Home</Link>
                        {status === "authenticated" && <>
                            <Link className="nav-link" href="/football/result">Result</Link>
                            <Link className="nav-link" href="/football/statistics">Statistics</Link>
                            <Link className="nav-link" href="/user/profile">Profile</Link>
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
export default Topnavbar
