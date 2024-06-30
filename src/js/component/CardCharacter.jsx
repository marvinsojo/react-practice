import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CardCharacter = () => {
  const { store } = useContext(Context);

  console.log(store.characters);

  return (
    
      <ul className="container d-flex justify-content-center row gap-2 py-4 px-0">
        {store.characters.map((character) => {
          return (
            <li key={character.id} className="card col-md-2 d-flex flex-column justify-content-center bg-light border-light border-2">
              <img className="card-img-top" src={character.image} alt="" />
              <h3>{character.name}</h3>
              <Link to="/description">
              <button className="btn btn-secondary">Read More!</button>
              </Link>
            </li>
          );
        })}
      </ul>
    
  );
};

export default CardCharacter;
