import RootLayout from '@/layouts/RootLayout'
import {NextPage} from 'next'
import {getSession} from 'next-auth/react';
import {Col, Row} from 'react-bootstrap'


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

interface Props {}

const Results: NextPage<Props> = ({}) => {
    return (
        <RootLayout title='Result' lead="view results">
            <Row>
                <Col lg={3} md={4} >

                </Col>
                <Col lg={9} md={8} >
                </Col>
            </Row>
        </RootLayout>
    )
}

export default Results