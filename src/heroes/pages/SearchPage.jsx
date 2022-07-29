import { useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components/HeroCard";
import { getHeroesByName } from "../helpers";

export const SearchPage = () => {
  const searchValue = localStorage.getItem("search");
  const { onInputChange, searchInput } = useForm({
    searchInput: searchValue || "",
  });
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    const heroes = getHeroesByName(searchInput);
    setHeroes(heroes);
    localStorage.setItem("search", searchInput);
  }, [searchInput]);

  return (
    <>
      <h1 className="mt-3">Search</h1>
      <div className="row">
        <div className="col-5 mt-3">
          <form>
            <input
              type="text"
              value={searchValue}
              onChange={onInputChange}
              name="searchInput"
              placeholder="Search a superhero"
              autoComplete="off"
            />
          </form>
        </div>
        <div className="col-7">
          {heroes.length === 0 ? (
            <div className="alert alert-danger">
              no hero with {searchInput} name
            </div>
          ) : (
            <></>
          )}
          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
