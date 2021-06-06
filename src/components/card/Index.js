import React from 'react';
import './card.css'
import {CURRENCY_ABBRIV} from '../../utils/const'

const Card = ({cur}) => {
    console.log('cur', cur)
    return (  
        <div className='card'>
            <div className='card-left'>
                <div className='card-header'>
                    <h2>{cur[0]}</h2>
                    <h2>{cur[1]}</h2>
                </div>
                    <h3>
                    {
                        CURRENCY_ABBRIV.map((item, idx) => {
                            let abbr ;
                            if(item.key === cur[0]){
                                abbr = item.stand
                            }

                            return abbr
                        })
                    }</h3>
                <h4>1 EUR = IDR 14.410.45</h4>
            </div>
            <div className='card-right'>
                <button>(-)</button>
            </div>
        </div> 
        );
}
 
export default Card;