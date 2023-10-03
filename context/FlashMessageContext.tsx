import * as React from 'react'
import { EBootstrapVariant } from '@/models/bootstpap/bs.types'
import FlashMessage from '@/components/FlashMessage'

export interface IFlashMessage {
	variant: EBootstrapVariant
	text: string[]
	timeout?: number
}

export interface IFlashMessageContext {
	flashMessages: IFlashMessage[]
	setFlashMessages: (flashMessages: IFlashMessage[]) => void
	addFlashMessage: (flashMessage: IFlashMessage) => void
	removeFlashMessage: (flashMessage: IFlashMessage) => void
}

const flashMessageInitialContext: IFlashMessageContext = {
	flashMessages: [
		{
			variant: EBootstrapVariant.PRIMARY,
			text: ['welcome'],
			timeout: 0,
		},
	],
	setFlashMessages: () => {},
	addFlashMessage: () => {},
	removeFlashMessage: () => {},
}

export const FlashMessageContext = React.createContext<IFlashMessageContext>(flashMessageInitialContext)

export const FlashMessageContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [flashMessages, setFlashMessages] = React.useState<IFlashMessage[]>()

	const addFlashMessage = () => {}
	const removeFlashMessage = () => {}

	return (
		<FlashMessageContext.Provider value={{ flashMessages, setFlashMessages, addFlashMessage, removeFlashMessage }}>
			{children}
		</FlashMessageContext.Provider>
	)
}
