const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
  const inputCurrencyValue = parseFloat(document.querySelector(".input-currency").value.replace(",", ".")) || 0
  const currencyValuetoConvert = document.querySelector(".currency-value-to-convert")
  const currencyValuetoConverted = document.querySelector(".currency-value")

  const dolarToday = 5.65
  const euroToday = 6.46
  const libraToday = 7.60
  const bitcoinToday = 534568

  // Mostra o valor digitado em real
  currencyValuetoConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(inputCurrencyValue)

  // Define valor convertido e formatação por moeda
  let convertedValue
  let formatOptions

  if (currencySelect.value === "dolar") {
    convertedValue = inputCurrencyValue / dolarToday
    formatOptions = { style: "currency", currency: "USD" }
  }

  if (currencySelect.value === "euro") {
    convertedValue = inputCurrencyValue / euroToday
    formatOptions = { style: "currency", currency: "EUR" }
  }

  if (currencySelect.value === "libra") {
    convertedValue = inputCurrencyValue / libraToday
    formatOptions = { style: "currency", currency: "GBP" }
  }

  if (currencySelect.value === "bitcoin") {
    convertedValue = inputCurrencyValue / bitcoinToday
    formatOptions = { style: "decimal", minimumFractionDigits: 6, maximumFractionDigits: 8 }
  }

  currencyValuetoConverted.innerHTML = new Intl.NumberFormat("en-US", formatOptions).format(convertedValue)
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
    currencyImage.src = "assets/euro.png"
  }

  if (currencySelect.value === "libra") {
    currencyName.innerHTML = "Libra"
    currencyImage.src = "assets/libra.png"
  }

  if (currencySelect.value === "bitcoin") {
    currencyName.innerHTML = "Bitcoin"
    currencyImage.src = "assets/bitcoin.png"
  }

  convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)

