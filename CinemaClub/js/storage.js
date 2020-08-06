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
}