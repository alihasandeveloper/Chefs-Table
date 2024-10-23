import Cookitems from "../CookItems/Cookitems.jsx";
import Cookings from "../Cookings/Cookings.jsx";
import {useState} from "react";

const Menu = () => {

    const [cookings, setCookings] = useState([]);


    function cookHandeler(cookItems) {
        const newCookings = [...cookings, cookItems];
        setCookings(newCookings);
    }
    // console.log(cookings);
    return (
        <div>
            <div className=''>
                <h1 className='mt-24 text-5xl font-bold text-center primary-color mb-6'>Our Feedback</h1>
                <p className='text-base gray-color mb-12 w-7/12 font-medium text-center mx-auto '>Lorem ipsum dolor sit
                    amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat
                    curabitur elementum mauris aenean neque. </p>
            </div>
            <div className='flex'>
                <div className='w-2/3'>
                    <Cookitems cookHandeler={cookHandeler}/>
                </div>
                <div className='border border-gray-200 rounded-2xl w-1/3 h-[685px] p-6'>
                    <Cookings cookings={cookings}/>
                </div>
            </div>
        </div>
    );
};

export default Menu;