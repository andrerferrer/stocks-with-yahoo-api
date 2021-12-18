const form = document.querySelector('form');

const updateTheDomWithApiData = (marketPrice, companyName, currency) => {
  // why no #results here?
  const resultsDiv = document.getElementById('results');

  resultsDiv.innerHTML = `
    ${companyName} current price is ${currency} ${marketPrice}
  `;
};

const callYahooAPI = (stockSymbol) => {
  // "prepare the API" that we will call
  const url = `https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=${stockSymbol}`;
  const options = {
    headers: {
      'x-api-key': 'De5INgjxEKalH4yBPSg4r63mVPNSLAHs7y5qmAmm'
    }
  };

  // call the API
  fetch(url, options)
    .then(res => res.json())
    .then((data) => {
      // understand what data is
      console.log(data);
      // extract info from the data (dig the json)
      const marketPrice = data.quoteResponse.result[0].regularMarketPrice;
      const companyName = data.quoteResponse.result[0].shortName;
      const currency = data.quoteResponse.result[0].currency;

      // do something with that data
      updateTheDomWithApiData(marketPrice, companyName, currency);
    });
};

const findStockOnline = (event) => {
  // why do we do this?
  event.preventDefault();

  // Who is form?
  console.log(form);
  // Who is event.currentTarget?
  console.log(event.currentTarget);
  // are they equal
  console.log(form === event.currentTarget);

  const input = event.currentTarget.querySelector('input');
  // what's the diff between input and input.value?
  const stockSymbol = input.value;
  callYahooAPI(stockSymbol);
};

form.addEventListener('submit', findStockOnline);
