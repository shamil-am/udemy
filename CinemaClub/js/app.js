const filmName = document.querySelector("#filmName");
const director = document.querySelector("#filmDirector");
const language = document.querySelector("#language");
let times = [];

trigger();

function trigger() {
  document.addEventListener("DOMContentLoaded", () => {
      let allFilms = JSON.parse(localStorage.getItem("Films"));
      if (allFilms == null) 
          return;
      allFilms.forEach(film => UI.addToTable(film));
  });

  document.querySelector("#filmForm").addEventListener("submit", (e) => {
    e.preventDefault();
    if (
      filmName.value == "" ||
      director.value == "" ||
      language.value == "Dil seç..."
    ) {
      UI.createAlert("Məlumatların tamlığın yoxlayın.", "danger");
      return;
    } else {
      let checked = document.querySelectorAll(
        ".timeselect input[type='checkbox']:checked"
      );
      checked.forEach((btn) => times.push(btn.getAttribute("time")));
      let newFilm = new Film(
        filmName.value,
        director.value,
        language.value,
        times
      );

      UI.addToTable(newFilm);
      UI.resetFormFields();
      Storage.addToLocalStorage(newFilm);

      UI.createAlert(`${newFilm.name} əlavə edildi`, "success");
    } //else end
  });
}
