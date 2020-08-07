document.querySelector("#change").addEventListener("click", convertMoney);
function convertMoney(params) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.exchangeratesapi.io/latest");
  xhr.onload = function () {
    if (this.status === 200) {
      let responseArr = JSON.parse(this.responseText);
      let amount = responseArr.rates.TRY;
      let input = Number(document.querySelector("#amount").value);
      let output = document.querySelector("#tl");
      output.value = input * amount;
    }
  };

  xhr.send();
}
