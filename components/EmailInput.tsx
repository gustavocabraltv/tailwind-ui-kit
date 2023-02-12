
import { EnvelopeIcon } from '@heroicons/react/24/outline'
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import SearchInputSVG from '../src/assets/search.svg'
import Image from 'next/image'

export default function EmailInput() {
    return (
      <div>
        <label htmlFor="price" className=" block text-sm font-medium text-gray-700 ">
        </label>
        <div className="relative mt-1 rounded-md shadow-sm w-full md:max-w-sm border-none outline-none">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <EnvelopeIcon className="h-6 w-6 text-slate-600"/>
          </div>
          <input
            type="text"
            name="price"
            id="price"
            className="block h-12 bg-slate-100 w-full rounded-md pl-12 pr-12 sm:text-sm border-slate-100  focus:border-slate-700 focus:ring-slate-700 "
            placeholder="Insira seu e-mail aqui"
          />
         
        </div>
      </div>
    )
  }
  