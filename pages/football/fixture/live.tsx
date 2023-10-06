import FixturesLayout from '@/layouts/FixturesLayout'
import RootLayout from '@/layouts/RootLayout'
import {NextPage} from 'next'

interface Props {}

const FootballFixturesLivePage: NextPage<Props> = ({}) => {
    return (
        <RootLayout title='Live' lead="fixtures">
            <FixturesLayout>
                FootballFixturesLivePage
            </FixturesLayout>
        </RootLayout>
    )
}

export default FootballFixturesLivePage