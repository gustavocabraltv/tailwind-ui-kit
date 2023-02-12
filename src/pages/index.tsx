import CustomerInfo from "components/CustomerInfo";
import DropDown from "components/DropDown";
import ItemNotification from "components/ItemNotification";
import MessageDropdown from "components/MessageDropdown";
import Overview from "components/Overview";
import PopularProduct from "components/PopularProduct";
import PriceInput from "components/PriceInput";
import PriceInput2 from "components/PriceInput2";
import SearchInput from "components/SearchInput";
import SignIn from "components/SignIn";



export default function Home() {
  return (
    <div className="flex gap-8 p-4 flex-col bg-slate-100 w-full h-screen ">
  
      <Overview/>
      <PopularProduct/>
       <SignIn/>
  

   
      </div>
  )
}
