import React from 'react';
import './homeStyle.css'

const Home = () => {
    return ( <div className='body'>
        <div className='header-container'>
            <div className='header-sub1'>
                <h3>USD - United States Dolars</h3>
            </div>
            <div className='header-sub2'>
                <h2>USD</h2>
                <h2>10.0000</h2>
            </div>
        </div>
        <div className='card-container'>
            <div className='card'>
                <div className='card-left'>
                    <div className='card-header'>
                        <h2>USD</h2>
                        <h2>10.0000</h2>
                    </div>
                    <h3>USD - United States Dolars</h3>
                    <h4>1 USD = IDR 14.410.45</h4>
                </div>
                <div className='card-right'>
                    <button>(-)</button>
                </div>
            </div>
        </div>
    </div> );
}
 
export default Home;