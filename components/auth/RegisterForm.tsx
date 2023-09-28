import * as React from 'react'
import {Button, Form, Row} from 'react-bootstrap'


interface IProps {
    loading: boolean,
    onSubmit: (e: React.FormEvent<HTMLFormElement>, email: string, password: string) => {}
}

const RegisterForm = ({loading, onSubmit}: IProps) => {

    const [email, setEmail] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')

    return (
        <Form onSubmit={(e) => onSubmit(e, email, password)}>
            {/* <Form onSubmit={(e) => onSubmit(e, email, password)}> */}
            <Form.Group as={Row}>
                <h3 className="text-center">Регистрация</h3>
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
                    Сохранить
                </Button>
            </Form.Group>
        </Form>
    )
}

export default RegisterForm
