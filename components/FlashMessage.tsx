import * as React from 'react'
import {IFlashMessage} from '@/context/FlashMessageContext'
import {EBootstrapVariant} from '@/models/bootstpap/bs.types'
import {faBell, faBug, faBullhorn, faCheckCircle, faExclamationCircle} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Alert} from 'react-bootstrap'

interface IProps {
	flashMessage: IFlashMessage
}

const FlashMessage = ({flashMessage}: IProps) => {
	const [show, setShow] = React.useState<boolean>(true)

	const {variant, header, text, timeout} = flashMessage
	const renderIcon = (variant: EBootstrapVariant) => {
		switch (variant) {
			default:
			case EBootstrapVariant.PRIMARY:
			case EBootstrapVariant.SECONDARY:
			case EBootstrapVariant.DARK:
			case EBootstrapVariant.LIGHT:
			case EBootstrapVariant.DEFAULT:
				return <FontAwesomeIcon className="m-auto" icon={faBell} />
			case EBootstrapVariant.SUCCESS:
				return <FontAwesomeIcon className="m-auto" icon={faCheckCircle} />
			case EBootstrapVariant.DANGER:
				return <FontAwesomeIcon className="m-auto" icon={faBug} />
			case EBootstrapVariant.WARNING:
				return <FontAwesomeIcon className="m-auto" icon={faBullhorn} />
			case EBootstrapVariant.INFO:
				return <FontAwesomeIcon className="m-auto" icon={faExclamationCircle} />
		}
	}

	return (
		<Alert show={show} variant={variant} onClose={() => setShow(false)} className="p-0" dismissible>
			<div className="d-flex justify-content-start">
				<div className="p-2">
					{renderIcon(variant)}
				</div>
				<div className="p-2">
					<Alert.Heading>{header}</Alert.Heading>
					<p className="m-1">{text}</p>
				</div>
			</div>
		</Alert>
	)
}
export default FlashMessage
