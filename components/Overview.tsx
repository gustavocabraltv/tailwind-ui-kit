import CustomerInfo from "./CustomerInfo";
import IncomeInfo from "./IncomeInfo";

const Overview = () => {
    return (
        <div className="shadow-sm md:w-[768px] w-full p-6 rounded-2xl bg-white min-w-[375px]">
            <div className="flex flex-col bg-slate-50 p-2 rounded-2xl md:flex-row">
                <CustomerInfo/>
                <IncomeInfo/>

            </div>

        </div>
    )
}

export default Overview;