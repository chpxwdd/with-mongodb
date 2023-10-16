import Image from "next/image"
import worldFlag from '@/image/world.svg'
import {IStorageLeague} from "@/models/mongo/storage.types"

interface IProps {
    league: IStorageLeague
}
const LeagueTitle = ({league}: IProps) =>
    <div className="d-flex align-items-baseline">
        <Image src={league?.logo || ''}
            alt={league.name}
            width={0} height={0}
            className='mx-2'
            style={{objectFit: "contain", width: '1rem', height: "1rem"}}
        />
        <div className="">{league.name}</div>
    </div>





export default LeagueTitle