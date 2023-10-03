import {EStogageMethod, EStorageEndpoint} from '@/constants/storage';
import * as React from 'react';


interface IProps {
    // endpoint: EStorageEndpoint,
    endpoint: string,
    method: EStogageMethod,
    body?: Object | null
}

const useStorageFetch = () => {

    const [loading, setLoading] = React.useState<boolean>(false)
    const [error, setError] = React.useState<string>("")
    const [data, setData] = React.useState<any[]>([])


    const fetchStorage = async (endpoint: string, method: EStogageMethod, body?: Object | null) => {
        const options: RequestInit = {
            method: method,
            headers: {'Content-Type': 'application/json'}
        }
        if (body && method === EStogageMethod.POST) options['body'] = JSON.stringify(body)

        setLoading(true);

        await fetch(endpoint, options)
            .then(res => res.json())
            .then(res => {
                console.log('useStorageFetch responce: ', res);
                setData(res.response)
                setLoading(false)
            })
            .catch(error => {
                setError(error)
                setLoading(false)
            });
    }

    return {data, loading, error, fetchStorage};
}

export default useStorageFetch