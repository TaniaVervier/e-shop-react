import React from "react";

const Favorites = ({ title, img, infos, details, price }) => {
  return (
    <div className="favorite">
      <div className="fav-card">
        <h4>{title}</h4>
        <img className="fav-pic" alt="a" src={img} />
        <p className="description">100% Naturel</p>
        <p className="description">{infos}</p>
        <p className="description">{details}</p>
        <p className="price">{price}</p>
        <button> Ajouter au panier </button>
      </div>
    </div>
  );
};

export default Favorites;
