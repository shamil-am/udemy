const input = document.querySelector("#amount");
const firstCurrency = document.querySelector("#firstCurrency");
const secondCurrency = document.querySelector("#secondCurrency");
const display = document.querySelector("#outputResult");

input.addEventListener("input", () => {
  justConvertMoney();
});

firstCurrency.onchange = () => {
  justConvertMoney();
  const ui = new UI(firstCurrency, secondCurrency);
  ui.changeFirst(firstCurrency);
};

secondCurrency.onchange = () => {
  justConvertMoney();
  const ui = new UI(firstCurrency, secondCurrency);
  ui.changeSecond(secondCurrency);
};

function justConvertMoney() {
  const convert = new Convert(firstCurrency.value, secondCurrency.value);
  convert
    .convertAmount()
    .then((response) => {
      let val = Number(input.value);
      display.value = (val * response).toFixed(2);
    })
    .catch((err) => console.error(err));
}
