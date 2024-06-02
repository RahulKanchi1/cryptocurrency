import React from 'react'
import './index.css'

const CryptocurrencyItem = (props) =>{
    const {coinDetails} = props
    const { currencyLogo , euroValue , usdValue , currencyName} = coinDetails

    return(
        <li className='table-headed'>
                <div className='type-container'>
                    <img src={currencyLogo} alt="coins" className='coin'/>
                    <span className='heading'>{currencyName}</span>
                </div>
                <div className='right-onee'>
                    <p className='headings'>{usdValue}</p>
                    <p className='headings'>{euroValue}</p>
                </div>
            </li>
    )
}


export default CryptocurrencyItem
