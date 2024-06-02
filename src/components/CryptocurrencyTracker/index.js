import React from 'react'
import './index.css'
import CryptocurrencyList from '../CryptocurrenciesList/index.js'

const CryptocurrencyTracker = () => {
  return (
    <div className='main-container'>
      <CryptocurrencyList/>
    </div>
  )
}

export default CryptocurrencyTracker
