import StatisticsNavbar from '@/components/StatisticsNavbar'
import {RapidContextProvider} from '@/context/RapidContext'
import Link from 'next/link'
import * as React from 'react'
import {Container, Nav, Navbar, Row} from 'react-bootstrap'

interface ILayoutProps {
    children: React.ReactNode
}

const StatisticsLayout = ({children}: ILayoutProps) => {

    return (
        <>
            <StatisticsNavbar />
            <RapidContextProvider>{children}</RapidContextProvider>
            {/* {children} */}
        </>
    )
}

export default StatisticsLayout
