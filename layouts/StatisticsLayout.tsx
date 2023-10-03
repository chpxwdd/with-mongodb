import StatisticsNavbar from '@/components/StatisticsNavbar'
import {FootballContextProvider} from '@/context/FootballContext'
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
            {children}
        </>
    )
}

export default StatisticsLayout
