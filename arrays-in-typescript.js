var countries = [
    "China",
    "Italy",
    "Thailand",
    "Greece",
    19,
];
countries.push("Japan", 43);
var bands = [
    {
        name: "Beatles",
        members: 4
    },
    {
        name: "Pink Floyd",
        members: 6
    },
    {
        name: "Queen",
        members: 6
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
        author: "Eichiro Oda"
    },
    {
        mangaTitle: "Vagabond",
        releaseYear: 1998,
        author: "Takehiko Inoue"
    },
    {
        mangaTitle: "Rouroni Kenshin",
        releaseYear: 1994,
        author: "Nobuhiro Watsuki"
    },
];
var findAuthor = mangaAndAnimeInfo.find(function (author) {
    return author.author === "Eichiro Oda";
});
console.log(findAuthor.author);
var filterMethod = mangaAndAnimeInfo.filter(function (manga) {
    return manga.releaseYear > 1994;
});
console.log(filterMethod);
