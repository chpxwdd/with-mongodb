import * as React from 'react'
import {NextPage} from 'next'
import {getSession, useSession} from 'next-auth/react'
import RootLayout from '@/layouts/RootLayout'
import StatisticsLayout from '@/layouts/StatisticsLayout'

export async function getServerSideProps(context) {
	const session = await getSession({req: context.req})
	if (!session) return {redirect: {destination: '/auth/login', permanent: false}}
	return {props: {session}}
}

interface Props {}

const FootballStatisticsPlayerPage: NextPage<Props> = ({}) => {

	return (
		<RootLayout title="Players" lead="statistics" >
			<StatisticsLayout>
				FootballStatisticsPlayerPage
			</StatisticsLayout>
		</RootLayout>
	)
}
export default FootballStatisticsPlayerPage
