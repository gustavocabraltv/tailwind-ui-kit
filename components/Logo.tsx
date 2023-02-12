import LogoImg from '../src/assets/Logo.svg'
import Image from 'next/image'

const Logo = () => {
    return (
        <div>
            <Image src={LogoImg} alt='Logo' width={48} />
        </div>
    )
}

export default Logo;