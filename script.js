const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value
  const currencyValuetoConvert = document.querySelector(".currency-value-to-convert")
  const currencyValuetoConverted = document.querySelector(".currency-value")

  const dolarToday = 5.2
  const euroToday = 6.2

  currencyValuetoConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(inputCurrencyValue)

  if (currencySelect.value === "dolar") {
    currencyValuetoConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputCurrencyValue / dolarToday)
  }

  if (currencySelect.value === "euro") {
    currencyValuetoConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(inputCurrencyValue / euroToday)
  }
}

function changeCurrency() {
  const currencyName = document.getElementById("currency-name")
  const currencyImage = document.querySelector(".currency-img")

  if (currencySelect.value === "dolar") {
    currencyName.innerHTML = "Dólar Americano"
    currencyImage.src = "./assets/estados-unidos (1) 1.png"
  }

  if (currencySelect.value === "euro") {
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./assets/euro.png"
  }

  convertValues()
}



currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
