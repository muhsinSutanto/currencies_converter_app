import React, {useEffect, useState} from 'react';
import Card from '../../components/card/Index';
import { BASE_URL } from '../../utils/const';

import './homeStyle.css'

const Home = () => {
    const [currencies, setCurrencies] = useState([])

    useEffect(() => {
        fetch(BASE_URL)
            .then(res => res.json())
            .then(data => {
                const allData = data.rates
                const value = Object.entries(allData).map(data => data)
                setCurrencies(value)
            }
            ).catch(err => console.log(err))
                
    }, [])

    console.log(currencies)
    return ( <div className='body'>
        <div className='header-container'>
            <div className='header-sub1'>
                <h3>EUR - Euro</h3>
            </div>
            <div className='header-sub2'>
                <h2>EUR</h2>
                <input type='number'/>
            </div>
        </div>
        <div className='card-container'>
            {
                currencies.map((cur, idx) => (
                    <Card cur={cur}/>
                ))
            }

        </div>
    </div> );
}
 
export default Home;