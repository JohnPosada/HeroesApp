import { heroes } from "../data/heroes";

export const getHeroesByName = (name) => {
  return heroes.filter(
    (hero) => hero.superhero.toLowerCase().includes(name.toLowerCase()) === true
  );
};
