import {Container} from 'react-bootstrap';
import Topnavbar from '@/components/Topnavbar';
import Header from '@/components/Header';
import {getSession} from 'next-auth/react';
import {FootballContextProvider} from '@/context/FootballContext';


export async function getServerSideProps(context) {
    const session = await getSession({req: context.req});

    if (!session) {
        return {
            redirect: {
                destination: '/auth/login',
                permanent: false,
            },
        };
    }

    return {
        props: {session},
    };
}

interface IProps {
    title: string
    lead?: string
    children: React.ReactNode
}

const RootLayout = ({title, lead, children}: IProps) => {
    return (
        <>
            <Topnavbar />
            <main>
                <Container fluid>
                    <header className='mt-2'><Header title={title} lead={lead} /></header>
                    <hr />
                    <section className='mt-2'>
                        <FootballContextProvider>
                            {children}
                        </FootballContextProvider>
                    </section>
                </Container>
            </main >
        </>
    );
};
export default RootLayout;