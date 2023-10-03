import * as React from 'react'
import { Container } from 'react-bootstrap'
import Topnavbar from '@/components/Topnavbar'
import Header from '@/components/Header'
import { getSession } from 'next-auth/react'
import { FootballContextProvider } from '@/context/FootballContext'
import { FlashMessageContext, FlashMessageContextProvider } from '@/context/FlashMessageContext'

export async function getServerSideProps(context) {
	const session = await getSession({ req: context.req })

	if (!session) {
		return {
			redirect: {
				destination: '/auth/login',
				permanent: false,
			},
		}
	}

	return {
		props: { session },
	}
}

interface IProps {
	title: string
	lead?: string
	children: React.ReactNode
}

const RootLayout = ({ title, lead, children }: IProps) => {
	const { flashMessages } = React.useContext(FlashMessageContext)
	return (
		<>
			<Topnavbar />
			<main>
				<Container fluid>
					<header className="mt-2">
						<Header title={title} lead={lead} />
					</header>
					<hr />
					<section className="mt-2">
						<FlashMessageContextProvider>
							<FootballContextProvider>{children}</FootballContextProvider>
						</FlashMessageContextProvider>
					</section>
				</Container>
			</main>
		</>
	)
}
export default RootLayout
