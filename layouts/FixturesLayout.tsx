import * as React from 'react'
import UserNavbar from '@/components/UserNavbar'
import FixturesNavbar from '@/components/FixturesNavbar'
import {Row} from 'react-bootstrap'

interface ILayoutProps {
    children: React.ReactNode
}

export default ({children}: ILayoutProps) => {

    return (
        <Row>
            <FixturesNavbar />
            {children}
        </Row>
    )
}
