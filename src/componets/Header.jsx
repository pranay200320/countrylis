import React from 'react'



const Header = () => {
    return (
        <>

            <header className='header-container'>
                <div className='header-content'>
                    <h2 className='title'>
                        <a href="/">Where In The World ?</a>
                    </h2>
                    <p className='theme-changer'>
                        <i className='fa-sharp-duotone fa-regular fa-moon' />
                        &nbsp;&nbsp;Dark Mode
                    </p>
                </div>
            </header>
        </>
    )
}

export default Header