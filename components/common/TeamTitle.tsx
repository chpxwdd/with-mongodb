import Image from "next/image"
import worldFlag from '@/image/world.svg'
import {IStorageTeam} from "@/models/mongo/storage.types"

interface IProps {
    team: IStorageTeam
}
const TeamTitle = ({team}: IProps) =>

    <div className="d-flex align-items-baseline">
        <Image src={team?.logo || ""}
            alt={team.name}
            width={0} height={0}
            className='mx-2'
            style={{objectFit: "contain", width: 'auto', height: "auto"}}
        />
        <div className="w-100">{team.name}</div>
    </div>


export default TeamTitle