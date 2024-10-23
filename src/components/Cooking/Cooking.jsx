import React from 'react';

const Cooking = ({cooking}) => {
    return (

        <>
            <tr>
            <th className='text-left'>{cooking.recipe_name}</th>
            <td className='text-left'>{cooking.preparing_time}</td>
            <td className='text-left'>{cooking.calories}</td>
            </tr>
            <button className='theme-bg py-2 px-4 rounded-[50px]'>Preparing</button>
        </>
    );
};

export default Cooking;