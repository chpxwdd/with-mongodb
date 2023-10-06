import FixtureFilterForm from '@/components/football/form/FixtureFilterForm';
import FixturesLayout from '@/layouts/FixturesLayout';
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

const FootbalFixturesPage: NextPage<Props> = ({}) => {
    return (
        <RootLayout title='Fixtures' lead="view fixture results">
            <FixturesLayout>
                <Row>
                    <Col lg={3} md={4} >
                        <FixtureFilterForm />
                    </Col>
                    <Col lg={9} md={8} >
                        FootbalFixturesPage
                    </Col>
                </Row>
            </FixturesLayout>
        </RootLayout>
    )
}

export default FootbalFixturesPage