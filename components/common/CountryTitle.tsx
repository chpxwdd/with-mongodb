import Image from "next/image"
import worldFlag from '@/image/world.svg'
import {IStorageCountry} from "@/models/mongo/storage.types"

interface IProps {
    country: IStorageCountry
}
const CountryTitle = ({country}: IProps) =>
    <div className="d-flex align-items-baseline">
        <Image src={country?.flag || worldFlag}
            width={0}
            height={0}
            alt={country.name}
            className="border border-1 border-default rounded rounded-1"
            style={{
                objectFit: 'contain',
                width: '20px',
                height: 'auto'
            }}
        />
        <div className='ms-2'>{country.name}</div>
    </div>


export default CountryTitle