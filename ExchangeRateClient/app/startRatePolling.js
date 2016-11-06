import React from 'react'
import ReactDOM from 'react-dom'
import Rates from './ui/Rates'

/**
*  Renders result
*  @param array Rates
*/
const renderRates = (rates) => {
  ReactDOM.render(<Rates rates={rates}/>, document.getElementById('random-ticker'))
}

export default function startRatePolling(endpoint, interval) {
    setInterval(()=>{
        fetch(endpoint)
        .then(function(response) {
           return response.json()
         }).then(function(json) {
           renderRates(json.rates)
         }).catch(function(ex) {
           console.log('parsing failed', ex)
         });
    }, interval)
}
