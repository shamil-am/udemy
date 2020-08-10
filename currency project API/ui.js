class UI {
  constructor(firstCurrency, secondCurrency) {
    this.firstValue = firstCurrency.value;
    this.secondValue = secondCurrency.value;
  }

  changeFirst() {
    document.querySelector("#outputFirst").textContent = this.firstValue;
  }
  changeSecond() {
    document.querySelector("#outputSecond").textContent = this.secondValue;
  }
}
