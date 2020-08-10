class Convert {
  constructor(firstCurrency, secondCurrency) {
    this.firstCurrency = firstCurrency;
    this.secondCurrency = secondCurrency;
    this.api = "https://api.exchangeratesapi.io/latest?base=";
  }

  convertAmount() {
    return new Promise((resolve, reject) => {
      fetch(this.api + this.firstCurrency)
        .then((response) => response.json())
        .then((json) => resolve(json.rates[this.secondCurrency]))
        .catch((err) => reject(err));
    });
  }
}
