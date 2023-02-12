import ItemNotification from "./ItemNotification";
import Image from 'next/image'
import MoreDots from '../src/assets/more.svg'

const MessageDropdown = () => {
    return (
        <div className="flex flex-col gap-3 p-3 w-full md:max-w-sm bg-white rounded-2xl md:min-w-[500px]">
            <div className="flex flex-row justify-between pl-3">
                <span className="text-lg font-semibold">Mensagens</span>
                <button className="flex h-8 w-8 bg-slate-100 rounded-full justify-center items-center"><Image src={MoreDots} alt='Dots' width={24}/> </button>
            </div>

            <div className="flex flex-col gap-2">
                <ItemNotification />
                <ItemNotification/>
                <ItemNotification/>
                <ItemNotification/>
                
            </div>

            <button 
                className=" bg-blue-600 hover:bg-blue-700  flex w-full mt-6 mb-3 h-12 items-center justify-center text-white rounded-xl text-base">
                Ver todas mensagens
                
            </button>

        </div>
    )
}

export default MessageDropdown;