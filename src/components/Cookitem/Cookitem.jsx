import {AiOutlineFire} from "react-icons/ai";
import {CiClock2} from "react-icons/ci";

const Cookitem = ({cookitem, cookHandeler}) => {
    // console.log(cookitem)
    const {recipe_image, recipe_name, short_description, ingredients, preparing_time, calories} = cookitem;
    // console.log(ingredients);
    return (

        <div className='w-[380px]'>
            <div className='p-6 border rounded-2xl shadow-xl'>
                <img className='rounded-2xl mb-6' src={recipe_image} alt={`Cover image of ${recipe_name}`}/>
                <h2 className='text-xl font-semibold mb-3'>{recipe_name}</h2>
                <p className='text-base text-[#878787]'>{short_description}</p>
                <hr className='mt-4 mb-6'/>
                <h3 className='text-xl font-medium text-color'> Ingredients: {ingredients.length}</h3>
                <ul className='list-disc mb-4'>
                    {ingredients.map(
                        (ingredient, index) =>
                            (<li className='text-[878787] ms-6 font-light' key={index}>{ingredient}</li>)
                    )}
                </ul>
                <hr className='mt-4 mb-6'/>
                <div className='flex items-center gap-4 mb-5'>
                    <span className='text-base  flex items-center gap-2'><CiClock2/>{preparing_time}</span>
                    <span className='text-base flex items-center gap-2'><AiOutlineFire/>{calories}</span>
                </div>
                <button className='theme-bg primary-color rounded-[50px] py-3 px-6 font-semibold'
                        onClick={() => cookHandeler(cookitem)}>Want to Cook
                </button>
            </div>
        </div>
    );
};

export default Cookitem;