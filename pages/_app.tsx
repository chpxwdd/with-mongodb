import {SessionProvider} from "next-auth/react"
import '@/scss/globals.scss';

export default ({Component, pageProps: {session, ...pageProps}}) => {
    return (
        <SessionProvider session={session}>
            <Component {...pageProps} />
        </SessionProvider>
    );
}
