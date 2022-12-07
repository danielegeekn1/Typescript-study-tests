interface Country {
  name: string;
  code: string;
  currency: string;
  population: number;
}
// type countryPreview = Pick<Country, "name" | "code">;
type countryPreview = Omit<Country, "currency" | "population">;
const countryPreview: countryPreview = {
  name: "India",
  code: "IN",
};

const country1: Country = {
  name: "Italy",
  code: "IT",
  currency: "€",
  population: 145_567_876,
};
//with pick method we choose which properties we want to use( only the properties we want to use)
//with omit method we choose which properties we want to omit ( only the one we do not want to use)

//RECORD
const anime: Record<string, string | number> = {
  title: "One Piece",
  author: "Eichiro Oda",
  age: 47,
};
interface AnimeInfo {
  title: string;
  author: string;
  age: number;
}
type animeDetails = Record<"first" | "second" | "third", AnimeInfo>;
const anime1: animeDetails = {
  first: {
    title: "One Piece",
    author: "Eichiro Oda",
    age: 47,
  },
  second: {
    title: "Naruto",
    author: "Masashi Kishimoto",
    age: 49,
  },
  third: {
    title: "Vagabond",
    author: "Takehiko Inoure",
    age: 45,
  },
};
