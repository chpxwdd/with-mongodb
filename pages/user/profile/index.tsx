import RootLayout from '@/layouts/RootLayout'
import UserLayout from '@/layouts/UserLayout'
import {NextPage} from 'next'

interface Props {}

const Profile: NextPage<Props> = ({}) => {
    return <RootLayout title='Profile' lead='user settings'>
        <UserLayout>
            Profile user page
        </UserLayout>
    </RootLayout>

}

export default Profile