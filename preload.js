window.addEventListener('DOMContentLoaded', () => {
    require('dotenv').config()
    const asset = 'DOGE'
    const format = 'USD' 
    document.getElementById('title').innerHTML = 
    `${asset} Tracker`
  function updatePrice() {
  const rp = require('request-promise')  
  const requestOptions = {
    method: 'GET',
    uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
    qs: {
      'start': '1',
      'limit': '5000',
      'convert': format
    },
    headers: {
      'X-CMC_PRO_API_KEY': process.env.API_KEY // Your API Key from coinmarketcap
    },
    json: true,
    gzip: true
  }
  
  rp(requestOptions).then(res => {
    let price = res.data[3].quote.USD.price
    document.getElementById('output').innerHTML =
    `The current price of ${asset} is ` + 
    new Intl.NumberFormat('en-US', 
    { 
    style: 'currency', 
    currency: format, 
    maximumSignificantDigits: 6 
    })
    .format(price)
  }).catch((err) => {
    console.log('API call error:', err.message)
  })
}
setInterval(() => {
  updatePrice()
}, 2500)
})