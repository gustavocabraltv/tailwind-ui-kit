

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
export default function SearchInput() {
    return (
      <div>
        <label htmlFor="price" className=" block text-sm font-medium text-gray-700">
          Insira o valor aqui:
        </label>
        <div className="relative mt-1 rounded-md shadow-sm w-full md:max-w-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Image src={SearchInputSVG} alt='Search' width={18} />
          </div>
          <input
            type="text"
            name="price"
            id="price"
            className="block w-full rounded-md border-gray-300 pl-9 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Buscar produtos, marcas e muito mais..."
          />
         
        </div>
      </div>
    )
  }
  