import FixturesLayout from '@/layouts/FixturesLayout'
import RootLayout from '@/layouts/RootLayout'
import {NextPage} from 'next'

interface Props {}

const FootballFixturesLeaguePage: NextPage<Props> = ({}) => {
    return (
        <RootLayout title='League' lead="fixtures">
            <FixturesLayout>
                FootballFixturesLeaguePage
            </FixturesLayout>
        </RootLayout>
    )
}

export default FootballFixturesLeaguePage