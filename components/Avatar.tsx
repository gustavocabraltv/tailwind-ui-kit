import Image from 'next/image'
import AvatarImg from '../src/assets/avatar.png'

const Avatar = () => {
    return (
        <div className=''>
        <Image src={AvatarImg} alt='Avatar' width={64} />
    </div>
    )
}

export default Avatar