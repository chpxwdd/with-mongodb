import * as React from 'react'
import UserNavbar from '@/components/UserNavbar'

interface ILayoutProps {
    children: React.ReactNode
}

export default ({children}: ILayoutProps) => {

    return (
        <>
            <UserNavbar />
            {children}
        </>
    )
}
