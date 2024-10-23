import React from 'react';

const Banner = () => {
    return (
        <div className="banner-bg h-[600px] rounded-3xl flex flex-col items-center justify-center">
            <h1 className='text-white text-6xl font-bold font text-center '>Discover an exceptional cooking<br/> class
                tailored for you!</h1>
            <p className='md:w-8/12 mx-auto mt-6 text-white text-xl font-light text-center'>Learn and Master Basic
                Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an
                exceptionally well world-class Programmer.æ</p>
            <div className='flex items-center justify-center gap-6 mt-10'>
                <button className='theme-bg primary-color rounded-[50px] py-5 px-8 font-semibold text-xl'>
                    Explore Now
                </button>
                <button
                    className='bg-transparent	border border-white text-white rounded-[50px] py-5 px-8 font-semibold text-xl'>
                    Our Feedback
                </button>
            </div>
        </div>
    );
};

export default Banner;