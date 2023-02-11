import ProfileImage from '../src/assets/profile.png'
import Image from 'next/image'

const PopularProduct = ()=> {
    return (
            <div className=" bg-white flex items-center px-4 py-4 shadow-sm rounded-xl w-full gap-4 sm:w-96 justify-between">
            <div className='flex items-center gap-4'>
                <Image src={ProfileImage} width={100} height={100} alt='Profile' />
                <h3 className=" text-base font-medium">Crypter - NFT UI kit</h3>
            </div>
            
            <div className='flex flex-col gap-2'>
                <p className="text-gray-500 text-base ">R$105.60</p>
                <p className="text-center bg-emerald-100 text-emerald-500 text-xs font-bold rounded-sm py-1 ">Ativo</p>
            </div>
            

            </div>
         )
}

export default PopularProduct;