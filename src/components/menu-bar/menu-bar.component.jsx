import React from 'react';
import './menu-bar.styles.scss';
import { Link } from 'react-router-dom';
import dining from '../../assets/images.jpg';
import delivery from '../../assets/delivery-img.png';
import nightLife from '../../assets/nightlife.jpg';
import nutrition from '../../assets/nutrition.jpg';

const MenuBar = () => {
    return (
        <div className='container'>

            <Link className='delivery' to='/delivery'>
                <img className='delivery' alt='Delivery' src={delivery} /> Delivery
            </Link>
            <Link className='dining-out' to='/dining-out'>
                <img className='dining-out' alt='Dining Out' src={dining} /> Dining Out
            </Link>
            <Link className='night-life' to='/night-life'>
                <img className='night-life' alt='Night Life' src={nightLife} /> Night Life
            </Link>
            <Link className='nutrition' to='/nutrition'>
                <img className='nutrition' alt='Nutrition' src={nutrition} /> Nutrition
            </Link>

        </div>
    )
}
export default MenuBar;