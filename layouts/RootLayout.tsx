import * as React from 'react'
import {Container, Row} from 'react-bootstrap'
import Header from '@/components/Header'
import {getSession} from 'next-auth/react'
import {FootballContextProvider} from '@/context/FootballContext'
import {FlashMessageContext, FlashMessageContextProvider} from '@/context/FlashMessageContext'
import FlashMessage from '@/components/FlashMessage'
import TopNavbar from '@/components/TopNavbar'

export async function getServerSideProps(context) {
	const session = await getSession({req: context.req})
	if (!session) return {redirect: {destination: '/auth/login', permanent: false}}
	return {props: {session}}
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
			<TopNavbar />
			<FlashMessageContextProvider>
				<main style={{marginTop: "70px"}}>
					<Container>
						<Row as={'header'} className='mb-2'>
							<Header title={title.toUpperCase()} lead={lead.toUpperCase()} />
						</Row>
						<FootballContextProvider>{children}</FootballContextProvider>
					</Container>
				</main>

				<section className='position-fixed fixed-bottom'>
					{flashMessages.length > 0 && (
						<Container>
							{flashMessages.map((item, index) => (
								<FlashMessage key={index} flashMessage={item} />
							))}
						</Container>
					)}
				</section>

			</FlashMessageContextProvider >
		</>
	)
}
export default RootLayout
