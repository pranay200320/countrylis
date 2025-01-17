import React from 'react'



const Header = () => {
    return (
        <>
            {/* Add Header Container  */}
            <header className='shadow-lg bg-white '>
                {/* Add Header Content  */}
                <div className='flex items-center justify-between max-w-[1200px] mx-auto my-4 py-4 '>
                    {/* title */}
                    <h2 className='  font-[800] text-[20px] cursor-pointer sm:text-[18px] md:text-[16px] lg:text-[20px] xl:text-[24px] '>
                        <a href="/" className='text-[22px] '>Know Your World</a>
                    </h2>

                </div>
            </header>
        </>
    )
}

export default Header