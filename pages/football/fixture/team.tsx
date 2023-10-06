import FixturesLayout from '@/layouts/FixturesLayout'
import RootLayout from '@/layouts/RootLayout'
import {NextPage} from 'next'

interface Props {}

const FootballFixturesTeamPage: NextPage<Props> = ({}) => {
    return (
        <RootLayout title='Team' lead="fixtures">
            <FixturesLayout>
                FootballFixturesTeamPage
            </FixturesLayout>
        </RootLayout>
    )
}

export default FootballFixturesTeamPage