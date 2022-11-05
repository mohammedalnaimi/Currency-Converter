fetch(
  "https://api.currencyfreaks.com/latest?apikey=8392844157b5440e9cdd05cafc5a06d0"
).then((result) => {
  let data = result.json()
  console.log(data)
  return data
}).then ((currency) => {
  // console.log(currency.rates)

  let button = document.getElementById("button")
  let priceOne = document.querySelector(".tl span")
  let priceTwo = document.querySelector(".iq span")
  // console.log(Math.min(currency.rates["IQD"]))

  button.onclick = function () {
  priceOne.innerHTML = parseFloat(document.getElementById("amount").value * currency.rates["TRY"]).toFixed(2)
  priceTwo.innerHTML = Math.floor(document.getElementById("amount").value * currency.rates["IQD"]).toFixed(2)
  }
});
