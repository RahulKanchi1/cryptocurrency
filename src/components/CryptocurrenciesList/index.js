import React from 'react'
import './index.css'
import CryptocurrencyItem from '../CryptocurrencyItem'
import { Component } from 'react'

class CryptocurrenciesList extends Component{
    state = { coinsData : [] }
    
    componentDidMount(){
        this.getCoinsData()
    }

    getCoinsData = async () => {
        const response = await fetch("https://apis.ccbp.in/crypto-currency-converter");
        const data = await response.json();
        const updatedData = data.map(each=>({
            id : each.id ,
            currencyLogo : each.currency_logo,
            currencyName : each.currency_name,
            usdValue : each.usd_value,
            euroValue : each.euro_value
        }));

        this.setState({coinsData: updatedData })
        
    }


    render(){
        const  {coinsData} = this.state;
        
    
        return (
            <div className='crypto-container'>
              <h1 className='title'>Cryptocurrency Tracker</h1>
              <img src='https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png' alt='coins' className='coin-image' />
              <div className='list-container'>
                <div className='table-head'>
                    <p className='heading'>Coin Type</p>
                    <div className='right-one'>
                        <p className='heading'>USD</p>
                        <p className='heading'>EURO</p>
                    </div>
                </div>
                <ul>
                    {coinsData.map(each=>(
                        <CryptocurrencyItem coinDetails={each} key={each.id} />
                    ))}
                </ul>
                
              </div>
            </div>
          )
    }
}

export default CryptocurrenciesList
