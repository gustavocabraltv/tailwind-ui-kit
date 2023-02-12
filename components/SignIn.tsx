import Logo from "./Logo";
import Image from 'next/image'
import Google from '../src/assets/google.svg'
import Apple from '../src/assets/apple.svg'
import SearchInput from "./SearchInput";
import EmailInput from "./InputEmail";


const SignIn = () => {
    return (
    <div className="flex flex-col gap-4 w-full md:w-96 bg-white p-6 rounded-xl">
    <div className="flex flex-row items-center ">
        <Logo/>
        
    </div>
        
        <h1 className=" text-4xl font-semibold">Entrar</h1>
        <span className="text-sm font-semibold ">Sign up with Open account</span>
                
        <div className="flex flex-row gap-2">
                    <button className=" w-full  flex flex-row gap-2 rounded-lg px-6 py-2 stroke-slate-200 border-2 font-semibold justify-center items-center hover:border-slate-800 ">
                        <Image src={Google} alt='Google' width={24}/>
                    <span className=" text-sm">Google</span>
                    </button>

                    <button className="w-full  flex flex-row gap-2 rounded-lg px-6 py-2 stroke-slate-200 border-2 font-semibold justify-center items-center hover:border-slate-800 ">
                        <Image src={Apple} alt='Google' width={24}/>
                    <span className=" text-sm">Apple</span>
                    </button>
    </div>
    <hr className="border-[1px] border-slate-200 my-4"></hr>
     
    <span className="text-sm font-semibold ">Ou continue com sua conta de e-mail</span>
<div className="flex flex-col gap-2">
    <EmailInput/>
    <SearchInput/>
    <button className=" bg-blue-600 hover:bg-blue-700  flex w-full h-12 items-center justify-center text-white rounded-xl text-base">
                Entrar     
    </button>       

</div>
    


    </div>
    )
}

export default SignIn;