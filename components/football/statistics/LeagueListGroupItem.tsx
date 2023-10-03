import * as React from 'react';
import {IStorageLeague} from '@/models/mongo/storage.types';
import Image from 'next/image';
import {Form, ListGroup} from 'react-bootstrap';
import worldFlag from '@/image/world.svg'


interface IProps {
    league: IStorageLeague
    leaguesApiId: number[]
    onChange: (e: React.ChangeEvent<HTMLInputElement>, api_id: number) => void
}

const LeagueListGroupItem = ({league, leaguesApiId, onChange}: IProps) => {
    return (
        <ListGroup.Item className='p-0 ps-2'>
            <div className='d-flex justify-content-start py-1 '>
                <div className='d-flex align-items-center'>
                    <Form.Check className='ms-2 text-warning' checked={leaguesApiId.includes(league.api_id)} onChange={(e) => onChange(e, league.api_id)} />
                    {/* <div style={{fontSize: '0.7rem', fontFamily: 'Consolas'}}><Badge pill bg='warning'>{league.api_id}</Badge></div> */}
                </div>
                <div className='d-flex  mx-2 align-items-center'>
                    <Image src={league?.logo || worldFlag}
                        alt={league.name}
                        width={0} height={0}
                        style={{objectFit: "contain", width: '1rem', height: "1rem"}}
                    />
                    <div className='ms-2'>{league.name}</div>
                </div>
            </div>
        </ListGroup.Item>
    )

}

export default LeagueListGroupItem