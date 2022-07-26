import { Link } from "react-router-dom";

const CharactersByHero = ({ alter_ego, characters }) => {
  return characters !== alter_ego ? (
    <p className="card-text">{characters}</p>
  ) : (
    <></>
  );
};

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImg = `/assets/heroes/${id}.jpg`;
  return (
    <>
      <div className="col">
        <div className="card">
          <div className="row no-gutters">
            <div className="col-4">
              <img src={heroImg} className="card-img" alt={superhero} />
            </div>
            <div className="col-8">
              <div className="class-body">
                <h5 className="card-title">{superhero}</h5>
                <p className="card-text">{alter_ego}</p>
                <CharactersByHero
                  alter_ego={alter_ego}
                  characters={characters}
                />

                <p className="card-text">
                  <small className="text-muted">{first_appearance}</small>
                </p>
                <Link to={`/hero/${id}`}>Ver más...</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
