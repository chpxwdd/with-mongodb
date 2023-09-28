import {FootballContextProvider} from '@/context/FootballContext'
import * as React from 'react'
interface ILayoutProps {
    children: React.ReactNode
}
const FootballLayout = ({children}: ILayoutProps) => {

    return (
        <FootballContextProvider>
            {children}
        </FootballContextProvider>
    )
}
export default FootballLayout
