import Link from 'next/link'
import {Nav, Navbar, Container} from 'react-bootstrap'
import {useSession} from 'next-auth/react'
export default () => {

    const {data: session, status} = useSession()

    return (
        <Navbar bg="light" variant="default" className='mb-3 rounded rounded-2 shadow-sm border '>
            <Container className='justify-content-between'>
                <Nav className="me-auto">
                    <Link className="nav-link" href="/user/profale">Summary</Link>
                    <Link className="nav-link" href="/user/favorite">Favorites</Link>
                </Nav>
            </Container>
        </Navbar >
    )
}
