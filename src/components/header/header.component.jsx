import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';




const Header = () => {
    return (
        <div className='conatiner'>
            <div className='logo'>
                <h2> FoodFestiva</h2>
                <div className='options'>
                    <Link className='option1' to='/login'>
                        LogIn
                    </Link>
                    <Link className='option2' to='/logout'>
                        LogOut
                    </Link>
                    <form className='search-box' onsubmit="event.preventDefault();" role="search">

                        <input className="search" type="search" placeholder="Search for restaurant,cousine or a dish" autofocus required />
                        <button type="submit">Search</button>
                    </form>

                </div>
            </div>
        </div>
    )
}
export default Header;