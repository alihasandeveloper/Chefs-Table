import React from 'react';
import Cooking from "../Cooking/Cooking.jsx";
const Cookings = ({cookings}) => {
    // console.log(cookings);
    return (
        <div>
            <h1 className='text-2xl primary-color text-center mb-4 font-medium'>Want to cook:{}</h1>
            <hr className='w-2/3 mx-auto mb-6'/>
            <div>
                <table className='w-full'>
                    <thead>
                    <tr>
                        <th className='text-left'>Name</th>
                        <th className='text-left'>Time</th>
                        <th className='text-left'>Calories</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        cookings.map(cooking => (<Cooking  key={cooking.recipe_id} cooking={cooking}/>))
                    }

                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default Cookings;