var countries = ["China", "Italy", "Thailand", "Greece", 19];
countries.push("Japan", 43);
var bands = [
  {
    name: "Beatles",
    members: 4,
  },
  {
    name: "Pink Floyd",
    members: 6,
  },
  {
    name: "Queen",
    members: 6,
  },
];
var brands = ["Apple, Samsung", "Asus"];
var population = [
  ["China", 1000000000],
  ["Narnia", 3000000000],
];
console.log(population[0]); // this'll return only China
console.log(population);
var mangaAndAnimeInfo = [
  {
    mangaTitle: "One Piece",
    releaseYear: 1997,
    author: "Eichiro Oda",
  },
  {
    mangaTitle: "Vagabond",
    releaseYear: 1998,
    author: "Takehiko Inoue",
  },
  {
    mangaTitle: "Rouroni Kenshin",
    releaseYear: 1994,
    author: "Nobuhiro Watsuki",
  },
];
//find method with array to find only the object which has the value of author property to be Eichiro Oda string
var findAuthor = mangaAndAnimeInfo.find(function (author) {
  return author.author === "Eichiro Oda";
});
console.log(findAuthor.author);
//filter method to find only the object with releaseYear over 1994
var filterMethod = mangaAndAnimeInfo.filter(function (manga) {
  return manga.releaseYear > 1994;
});
console.log(filterMethod);
//for each array method
mangaAndAnimeInfo.forEach(function (elem) {
  console.log(
    "The manga author who will come this year at the comic fair\n   is "
      .concat(elem.author, ", and He'll talk about this manga  ")
      .concat(elem.mangaTitle, " ")
  );
});
//map method
var mangaInfo = mangaAndAnimeInfo.map(function (objElem) {
  return objElem.releaseYear;
});
console.log(mangaInfo);
