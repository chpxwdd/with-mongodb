import RegisterForm from '@/components/auth/RegisterForm'
import FullscreenLayout from '@/layouts/FullscreenLayout'
import { NextPage } from 'next'

interface IProps {}

const Register: NextPage<IProps> = ({}: IProps) => {
	return (
		<FullscreenLayout>
			<RegisterForm />
		</FullscreenLayout>
	)
}

export default Register
