import React from 'react'
import Avatar from "./Avatar"


const ItemNotification = () => {
    
    function restringirString(str: string) {
        if (str.length > 39) {
          str = str.substring(0, 29) + "...";
        }
        return str;
      }
      
      const texto = "When do you release the coded i'm about when you";



    return (
        <div className={`w-full md:w-full flex flex-row gap-3 p-3 rounded-xl items-center bg-white hover:bg-slate-100 hover:cursor-pointer`}>
            <Avatar/>
            <div className="flex flex-col gap-1 w-full">
                <div className="flex flex-row justify-between">
                        <span className="  font-semibold">Gustavo Cabral</span>
                        <div className="flex flex-row text-xs gap-3 text-slate-400 items-center">
                            03:30PM
                            <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                        </div>
                </div>
                
                <span className=" text-slate-500">{restringirString(texto)}</span>
            </div>
        </div>
    )
}

export default ItemNotification