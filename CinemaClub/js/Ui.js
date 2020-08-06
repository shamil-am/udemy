class UI {
  static addToTable(newFilm) {
    let tr = document.createElement("TR");
    tr.innerHTML = `
        <td>${newFilm.name}</td>
        <td>${newFilm.director}</td>
        <td>${newFilm.language}</td>
        <td>${newFilm.times}</td>
        <td><a href="#" class="btn btn-danger">X</a></td>
        `;
    let firstChild = document.querySelector(".tableBody").firstElementChild;
    if (firstChild == null) {
      document.querySelector(".tableBody").appendChild(tr);
    } else {
      document.querySelector(".tableBody").insertBefore(tr, firstChild);
    }
    times = [];
  }

  static createAlert(message, typeOfError) {
    const div = document.createElement("div");
    div.className = `alert alert-${typeOfError} mt-2`;
    div.textContent = message;
    document.querySelector("#filmForm").appendChild(div);
    setTimeout(() => {
      div.remove();
    }, 1000);
  }

  static resetFormFields() {
    filmName.value = "";
    director.value = "";
    language.value = ""; //
    let allCheckbox = document.querySelectorAll(
      ".timeselect input[type='checkbox']"
    );
    allCheckbox.forEach((btn) => (btn.checked = false));
  }

  static removeFilmFromTable(btn){
    btn.parentElement.parentElement.remove();
  }
}
