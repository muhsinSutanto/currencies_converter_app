import React, {useEffect, useState} from 'react';
import Card from '../../components/card/Index';
import { BASE_URL } from '../../utils/const';
import { fetchCurrencies } from '../../utils/service';

import './homeStyle.css'

const Home = () => {
    const [currencies, setCurrencies] = useState([])
    const [hiddenCurren, setHiddenCurren] = useState([])
    const [number, setNumber] = useState(1)
    const [showAdd, setShowAdd] = useState(true)
    const [selValue, setSelectValue] = useState('')

    useEffect(() => {
        fetchCurrencies(BASE_URL) 
            .then(data => {
                const allData = data.rates
                const value = Object.entries(allData).map(data => data)
                const showed = value.slice(0,4)
                setCurrencies(showed)
                setHiddenCurren(value)
            }
            ).catch(err => console.log(err))  
    }, [])

    const handleAddBtn = () => {
        setShowAdd(!showAdd)
        defaultValue()
    }

    const defaultValue = () => {
        const def = hidden[0][0]
        setSelectValue(def)
    }

    const handleRemove = (idx) => {
        let data = [...currencies]
        data.splice(idx, 1)
        setCurrencies(data)
    }

    const handleSubmit = async () => {
        let arr = [...currencies]
        let allData = [...hidden]
        let newData = allData.filter(item => (
            item[0] == selValue
        ))

        const newArr = arr.concat(newData)
        setCurrencies(newArr)
        setShowAdd(!showAdd)
    }

    const hidden = hiddenCurren.filter(x => !currencies.includes(x));

    return ( 
    <div className='body'>
        
        <div className='header-container'>
            <div className='header-sub1'>
                <h3>EUR - Euro</h3>
            </div>
            <div className='header-sub2'>
                <h2>EUR</h2>
                <input value={number} type='number' onChange={e => setNumber(e.target.value)}/>
            </div>
        </div>
        
        <div className='card-container'>
            {
                currencies.map((cur, idx) => (
                    <Card idx={idx} cur={cur} number={number} handleRemove={handleRemove}/>
                ))
            }
            {
                !!showAdd ? (<button onClick={handleAddBtn} className='addBtn-container'>
                    <p>(+)  Add More Currencies</p>
                </button>) : 
                    !!hidden.length ? (
                        <div className='option-container'>
                            <div className='select-container'>
                                <select value={selValue} onChange={e => setSelectValue(e.target.value)}>
                                    {
                                        hidden.map(item => (
                                            <option value={item[0]}>{item[0]}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className='submit-container'>
                                <button onClick={handleSubmit}>
                                    SUBMIT
                                </button>
                            </div>
                        </div>
                    ) : <h1>All has been added</h1>  
            }
        </div>
    </div> );
}
 
export default Home;