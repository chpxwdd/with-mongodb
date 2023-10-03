import { IFlashMessage } from '@/context/FlashMessageContext'
import { EBootstrapVariant } from '@/models/bootstpap/bs.types'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'

interface IProps {
	flashMessage: IFlashMessage
}

const FlashMessage = ({ flashMessage }: IProps) => {
	const { variant, text, timeout } = flashMessage
	const renderIcon = (variant: EBootstrapVariant) => {
		switch (variant) {
			default:
				return <FontAwesomeIcon icon={faInfo} />
			case EBootstrapVariant.PRIMARY:
				return <></>
			case EBootstrapVariant.SECONDARY:
				return <></>
			case EBootstrapVariant.DANGER:
				return <></>
			case EBootstrapVariant.WARNING:
				return <></>
			case EBootstrapVariant.INFO:
				return <></>
			case EBootstrapVariant.DARK:
				return <></>
			case EBootstrapVariant.LIGHT:
				return <></>
			case EBootstrapVariant.DEFAULT:
				return <></>
		}
	}

	return (
		<div className={`alert alert-${variant}`} role="alert">
			<div className="d-flex m-0">
				<div className={`bg-${variant}`}>{renderIcon(variant)}</div>
				<div className="border border-left">
					{text.map((item) => (
						<p>{item}</p>
					))}
				</div>
			</div>
		</div>
	)
}
export default FlashMessage
