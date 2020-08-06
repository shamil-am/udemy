class Film {
  constructor(name, director, language, times) {
    if (times.length < 1) {
      times = "Yaxin zamanda";
    }
    (this.name = name),
      (this.director = director),
      (this.language = language),
      (this.times = times);
  }
}
