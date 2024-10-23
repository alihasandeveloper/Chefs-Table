import React, {useEffect, useState} from 'react';
import Cookitem from "../Cookitem/Cookitem.jsx";

const Cookitems = ({cookHandeler}) => {
    const [cookitems, setCookitems] = useState([]);
    useEffect(() => {
        fetch('cooktems.json')
            .then(res => res.json())
            .then(data => setCookitems(data))
    }, [])
    // console.log(cookitems);
    return (
        <div className=''>
            <div className='grid grid-cols-2 gap-4'>
                {
                    cookitems.map((cookitem) => (<Cookitem cookitem={cookitem} key={cookitem.id} cookHandeler={cookHandeler} />))
                }
            </div>
        </div>
    );
};

export default Cookitems;