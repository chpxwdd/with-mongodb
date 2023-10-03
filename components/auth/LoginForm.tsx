import * as React from 'react'
import { Button, Form, Row } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { NextResponse } from 'next/server'
import { signIn, signOut } from 'next-auth/react'

interface ILoginFormProps {
	loading: boolean
}

const LoginForm = ({ loading }: ILoginFormProps) => {
	const [email, setEmail] = React.useState<string>('')
	const [password, setPassword] = React.useState<string>('')

	const router = useRouter()
	const login = async (e: React.FormEvent) => {
		e.preventDefault()

		const result = await signIn('credentials', {
			redirect: false,
			email: email,
			password: password,
		})

		if (!result.error) router.replace('/user/profile')
	}

	return (
		<Form onSubmit={(e: React.FormEvent) => login(e)}>
			<Form.Group as={Row}>
				<h3 className="text-center">Авторизация</h3>
			</Form.Group>
			<Form.Group as={Row} className="mb-2">
				<Form.Control
					type="email"
					size="lg"
					disabled={loading}
					placeholder="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</Form.Group>
			<Form.Group as={Row} className="mb-2">
				<Form.Control
					type="password"
					size="lg"
					disabled={loading}
					placeholder="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</Form.Group>
			<Form.Group as={Row} className="mb-3">
				<Button
					type="submit"
					className="btn btn-lg btn-primary"
					disabled={loading}
				>
					Войти
				</Button>
			</Form.Group>
		</Form>
	)
}

export default LoginForm
