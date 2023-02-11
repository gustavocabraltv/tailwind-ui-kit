import Income from '../src/assets/income.svg'
import Info from '../src/assets/info.svg'
import ArrowUp from '../src/assets/up.svg'


import Image from 'next/image'

const IncomeInfo = () => {
    return (
        <div className='flex px-2 py-2 bg-transparent rounded-lg w-full '>

           <div className='flex w-full md:w-full justify-between '>
                <div className='flex py-3 gap-4 px-3'>

                        <div className="flex items-center justify-center w-10 h-10 bg-purple-100 rounded-3xl">
                            <Image src={Income} alt='Shopping Cart Icon' width={24} height={24}/>
                        </div>  
                        
                        <div className='flex flex-col'>
                                <div className='flex items-center gap-2'>
                                    <span className='text-base text-slate-400'>Receita</span>
                                    <Image src={Info} alt='Shopping Cart Icon' width={16} height={16}/>
                                </div>
                                <h2 className='md:text-4xl text-2xl font-semibold'>R$256,00</h2>
                        </div> 
                </div>    
                  
                <div className='flex gap-1 px-2 py-1 bg-white items-center h-fit rounded-lg text-xs font-semibold text-emerald-500'>
                 <Image src={ArrowUp} alt='Percentage' width={16} height={16}/>
                    <span>37.8%</span>
                 </div>
            </div>          
        </div>
    )
}

export default IncomeInfo;