import React, { FC, PropsWithChildren } from 'react'
import TheHeader from './header/TheHeader'
import TheFooter from './footer/TheFooter'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
    return (
        <div>
            <TheHeader />
            <main>
                {children}
            </main>
            <TheFooter />
        </div>
    )
}

export default Layout