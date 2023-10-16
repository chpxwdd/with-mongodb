import * as React from 'react';
import {IStorageLeague} from '@/models/mongo/storage.types';
import Image from 'next/image';
import {Badge, Form, ListGroup} from 'react-bootstrap';
import worldFlag from '@/image/world.svg'


interface IProps {
    league: IStorageLeague
    leaguesApiId: number[]
    onChange: (e: React.ChangeEvent<HTMLInputElement>, api_id: number) => void
}


const LeagueListGroupItem = ({league, leaguesApiId, onChange}: IProps) => {


    const isChecked: boolean = leaguesApiId.includes(league.api_id)

    return (
        <ListGroup.Item action>
            <div className='d-flex align-items-center justify-content-between'>
                <div className='d-flex'>
                    <Form.Check className='text-warning  align-items-end' checked={leaguesApiId.includes(league.api_id)} onChange={(e) => onChange(e, league.api_id)} />
                    <Image src={league?.logo || worldFlag}
                        alt={league.name}
                        width={0} height={0}
                        className='mx-2 mt-1'
                        style={{objectFit: "contain", width: '1rem', height: "1rem"}}
                    />
                    {league.name}
                </div>
                <div>
                    <Badge pill bg='warning' className='mx-2 fw-light p-1'><small>{league.api_id}</small></Badge>
                </div>
            </div>
        </ListGroup.Item >
    )

}

export default LeagueListGroupItem