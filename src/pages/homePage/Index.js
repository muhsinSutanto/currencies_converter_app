import React from 'react';
import Card from '../../components/card/Index';

import './homeStyle.css'

const Home = () => {
    return ( <div className='body'>
        <div className='header-container'>
            <div className='header-sub1'>
                <h3>USD - United States Dolars</h3>
            </div>
            <div className='header-sub2'>
                <h2>USD</h2>
                <input type='number'/>
            </div>
        </div>
        <div className='card-container'>
            <Card/>
        </div>
    </div> );
}
 
export default Home;