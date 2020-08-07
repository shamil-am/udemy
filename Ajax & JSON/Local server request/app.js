// document.querySelector("#btnAjax").addEventListener("click", showDisplay);

// function showDisplay() {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", "example.txt");

//   /*   xhr.onprogress = function () {
//     console.log(this.readyState);
//     console.log(this.status);
//   }; */

//   xhr.onload = function () {
//     if (this.status == 200) {
//       /* console.log(this.responseText);
//       console.log(this.readyState); */

//       document.querySelector("#display").textContent = this.responseText;
//     }
//   };

//   xhr.send();
// }

document.querySelector("#ajax").addEventListener("click", () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "example.json");
  xhr.onload = function () {
    if (this.status == 200) {
      let emp = JSON.parse(this.responseText);
      let tbody = document.querySelector("#employees");
      tbody.innerHTML = "";
      emp.forEach((person) => {
        let tr = document.createElement("TR");
        tr.innerHTML = `
          <td>${person.name}</td>
          <td>${person.department}</td>
          <td>${person.salary}</td>
          `;
        tbody.appendChild(tr);
      });
    }
  };

  xhr.send();
});
