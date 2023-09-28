import FavoriteEditor from '@/components/football/FavoriteEditor';
import RootLayout from '@/layouts/RootLayout';
import {NextPage} from 'next';
import {getSession} from 'next-auth/react';
import {Container} from 'react-bootstrap';

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

interface IProps {}

const Profile: NextPage<IProps> = ({}: IProps) => {
    return <RootLayout title="Profile" lead="personalization data">
        <Container>
            <FavoriteEditor />
        </Container>
    </RootLayout>;

}

export default Profile

