import Navber from "./Navbar/Navber.jsx";
import { VscAccount } from "react-icons/vsc";

const Header = () => {
    return (
        <div className='flex justify-between items-center py-12'>
            <div>
                <h1 className='text-3xl font-bold  primary-color'>Recipe Calories</h1>
            </div>
            <Navber/>
            <div>
                {/*<div className="flex justify-start items-center gap-2 rounded-[500px] bg-theme w-[212px]">*/}
                {/*    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"*/}
                {/*               fill="none"><path d="M21 20.9998L15.803 15.8028M15.803 15.8028C17.2096 14.3962 17.9998 12.4885 17.9998 10.4993C17.9998 8.51011 17.2096 6.60238 15.803 5.19581C14.3964 3.78923 12.4887 2.99902 10.4995 2.99902C8.51029 2.99902 6.60256 3.78923 5.19599 5.19581C3.78941 6.60238 2.99921 8.51011 2.99921 10.4993C2.99921 12.4885 3.78941 14.3962 5.19599 15.8028C6.60256 17.2094 8.51029 17.9996 10.4995 17.9996C12.4887 17.9996 14.3964 17.2094 15.803 15.8028Z" stroke="#150B2B" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>*/}
                {/*    </svg>*/}
                {/*    </span>*/}
                {/*    <input placeholder="Search" className='border-none outline-none'/>*/}
                {/*</div>*/}

                <div className='theme-bg p-2 rounded-[50px]'>
                    <VscAccount />
                </div>
            </div>
        </div>
    );
};

export default Header;