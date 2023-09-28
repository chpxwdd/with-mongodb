import LoginForm from '@/components/auth/LoginForm'
import {useRouter} from 'next/router';
import {getSession} from 'next-auth/react';
import {useEffect, useState} from 'react';
import {signIn} from 'next-auth/react';
import FullscreenLayout from '@/layouts/FullscreenLayout';
import {NextPage} from 'next';

interface IProps {}

const Login: NextPage<IProps> = ({}: IProps) => {

    const [loading, setLoading] = useState(true);
    const router = useRouter();

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>, email: string, password: string) => {

        e.preventDefault();

        const result = await signIn('credentials', {
            redirect: false,
            email: email,
            password: password,
        });
        console.log(result);

        if (!result.error) router.replace('/user/profile');

    }

    useEffect(() => {
        getSession().then((session) => {
            if (session) {
                router.replace('/');
            } else {
                setLoading(false);
            }
        });
    }, [router]);


    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <FullscreenLayout>
            <LoginForm loading={loading} onSubmit={onSubmit} />
        </FullscreenLayout>
    )
}

export default Login