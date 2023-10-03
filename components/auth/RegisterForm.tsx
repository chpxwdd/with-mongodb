import register from '@/pages/api/auth/register'
import Link from 'next/link'
import * as React from 'react'
import { Button, Form, Row } from 'react-bootstrap'

const RegisterForm = () => {
	const [loading, setLoading] = React.useState<boolean>(false)
	const [email, setEmail] = React.useState<string>('')
	const [username, setUsername] = React.useState<string>('')
	const [password, setPassword] = React.useState<string>('')

	const register = async (e: React.FormEvent) => {
		e.preventDefault()
		console.log(e.target)
		const res = await fetch('/api/auth/register', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email, username, password }),
		})
		const json = await res.json()
		console.log(json)
	}

	return (
		<Form onSubmit={(e) => register(e)}>
			<Row>
				<h3 className="text-center">Регистрация</h3>
				<hr className="mb-2" />
			</Row>
			<Form.Group as={Row} className="mb-2">
				<Form.Control
					size="lg"
					type="text"
					disabled={loading}
					placeholder="username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
			</Form.Group>
			<Form.Group as={Row} className="mb-2">
				<Form.Control
					size="lg"
					type="email"
					disabled={loading}
					placeholder="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</Form.Group>
			<Form.Group as={Row} className="mb-2">
				<Form.Control
					size="lg"
					type="password"
					disabled={loading}
					placeholder="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</Form.Group>
			<Form.Group as={Row} className="mb-1">
				<Button size="lg" type="submit" className="btn btn-warning" disabled={loading}>
					Зарегистрироваться
				</Button>
			</Form.Group>
			<Row>
				<div className="d-flex justify-content-between text-small px-0">
					<Link href="/auth/login" className="btn btn-sm btn-link">
						Войти
					</Link>
					<Link href="/auth/forgot-password" className="btn btn-sm btn-link">
						Забыли пароль?
					</Link>
				</div>
			</Row>
		</Form>
	)
}

export default RegisterForm
