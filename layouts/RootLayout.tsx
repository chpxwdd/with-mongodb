import * as React from 'react'
import {Container} from 'react-bootstrap'
import Topnavbar from '@/components/Topnavbar'
import Header from '@/components/Header'
import {getSession} from 'next-auth/react'
import {FootballContextProvider} from '@/context/FootballContext'
import {FlashMessageContext, FlashMessageContextProvider} from '@/context/FlashMessageContext'
import FlashMessage from '@/components/FlashMessage'

export async function getServerSideProps(context) {
	const session = await getSession({ req: context.req })
	if (!session) return { redirect: { destination: '/auth/login', permanent: false } }
	return { props: { session } }
}
interface IProps {
	title: string
	lead?: string
	children: React.ReactNode
}

const RootLayout = ({title, lead, children}: IProps) => {
	const {flashMessages} = React.useContext(FlashMessageContext)

	React.useEffect(() => {
		console.log('flashMessages UE in RootLayout ', flashMessages)
	}, [flashMessages])

	return (
		<>
			<Topnavbar />
			<FlashMessageContextProvider>
				<main>
<<<<<<< HEAD
					{flashMessages.length > 0 &&

						flashMessages.map((item, index) => <FlashMessage key={index} flashMessage={item} />)}
					<Container fluid>
=======
					<Container>
>>>>>>> 8d907a00569eb2c95cfbd3da519b5c1f007d761d
						<header className="mt-2">
							<Header title={title} lead={lead} />
						</header>
						<hr />
						<section className="mt-2">
							<FootballContextProvider>{children}</FootballContextProvider>
						</section>
					</Container>
				</main>
				<footer>
					{flashMessages.length > 0 && (
						<Container>
							{flashMessages.map((item, index) => (
								<FlashMessage key={index} flashMessage={item} />
							))}
						</Container>
					)}
				</footer>
			</FlashMessageContextProvider>
		</>
	)
}
export default RootLayout
