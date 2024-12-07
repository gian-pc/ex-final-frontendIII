import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from '../Components/utils/global.context';

const Card = ({ name, username, id, isFavorite }) => {
  const { state, dispatch } = useContext(ContextGlobal);

  const addFav = () => {
    const fav = { name, username, id };
    dispatch({ type: 'ADD_FAVORITE', payload: fav });
    alert(`${name} se agregó a favoritos`);
  };

  const removeFav = () => {
    const fav = { id };
    dispatch({ type: 'REMOVE_FAVORITE', payload: fav });
  };

  return (
    <div className="card">
      <img className="card-img" src="/images/doctor.jpg" alt="Doctor" />
      <h2>
        <Link to={`/dentist/${id}`}>{name}</Link>
      </h2>
      <p>{username}</p>
      {isFavorite ? (
        <button onClick={removeFav} className="favButton">
          <i className="fas fa-star star-icon"></i> Remove fav
        </button>
      ) : (
        <button onClick={addFav} className="favButton animate-favButton">
          <i className="fas fa-star star-icon"></i> Add fav
        </button>
      )}
    </div>
  );
};

export default Card;
