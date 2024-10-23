const Navber = () => {
    return (
        <div>
            <ul className='flex justify-center items-center gap-12'>
                <li className='secondary-color text-base hover:theme-color duration-200 ease-linear hover:underline cursor-pointer'>Home</li>
                <li className='secondary-color text-base hover:theme-color duration-200 ease-linear hover:underline cursor-pointer'>Recipes</li>
                <li className='secondary-color text-base hover:theme-color duration-200 ease-linear hover:underline cursor-pointer'>About</li>
                <li className='secondary-color text-base hover:theme-color duration-200 ease-linear hover:underline cursor-pointer'>Search</li>
            </ul>
        </div>
    );
};

export default Navber;