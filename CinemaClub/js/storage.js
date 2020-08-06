class Storage{
    static addToLocalStorage(newFilm){
        let films;
        if (localStorage.getItem("Films") == null) {
            films = [];
        }else{
            films = JSON.parse(localStorage.getItem("Films"));
        }
        films.push(newFilm);
        localStorage.setItem("Films",JSON.stringify(films));
    }

    static removeFilmFromStorage(btn){
        let filmName = btn.parentElement.parentElement.firstElementChild.textContent;
        let allFilms = JSON.parse(localStorage.getItem("Films"));
        
        allFilms.forEach(function(film,index) {
            if (film.name == filmName) {
                allFilms.splice(index,1);
            }
        })

        localStorage.setItem("Films",JSON.stringify(allFilms));
    }
}