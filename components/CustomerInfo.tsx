import ShoppingCart from '../src/assets/light.svg'
import Info from '../src/assets/info.svg'
import ArrowDown from '../src/assets/down.svg'


import Image from 'next/image'

const CustomerInfo = () => {
    return (
        <div className='flex px-2 py-2 shadow-sm rounded-xl w-full md:max-w-sm bg-white'>

           <div className='flex w-full md:w-full justify-between'>
                <div className='flex py-3 px-3 gap-4'>

                        <div className="flex items-center justify-center w-10 h-10 bg-sky-100 rounded-3xl">
                            <Image src={ShoppingCart} alt='Shopping Cart Icon' width={24} height={24}/>
                        </div>  
                        
                        <div className='flex flex-col'>
                                <div className='flex items-center gap-2'>
                                    <span className='text-base text-slate-400'>Clientes</span>
                                    <Image src={Info} alt='Shopping Cart Icon' width={16} height={16}/>
                                </div>
                                <h2 className='md:text-4xl text-2xl font-semibold'>1024</h2>
                        </div> 
                </div>    
                  
                 <div className='flex gap-1 px-2 py-1 bg-orange-100 items-center h-fit rounded-lg text-xs font-semibold text-orange-600'>
                 <Image src={ArrowDown} alt='Percentage' width={16} height={16}/>
                    <span>37.8%</span>
                 </div>
            </div>          
        </div>
    )
}

export default CustomerInfo;