import React from "react";

const Favorites = () => {
  const img1 = new URL("../../public/img/escada.jpg", import.meta.url);
  const img2 = new URL("../../public/img/narciso.jpg", import.meta.url);
  const img3 = new URL("../../public/img/valentino.jpg", import.meta.url);

  return (
    <div className="favs">
      <h3>LES FAVORIS</h3>
      <p className="favoris">_________</p>

      <div className="favorite">
        <div className="fav-card">
          <h4>Black Velvet</h4>
          <img className="fav-pic" alt="a" src={img1} />
          <p className="stars"></p>
          <p className="description">100% Naturel</p>
          <p className="description">Arômes doux et délicats</p>
          <p className="description">Fragrance florale et fruitée</p>
          <p className="price"> 46,99$ </p>
          <button> Ajouter au panier </button>
        </div>

        <div className="fav-card">
          <h4>Grey Iris</h4>
          <img className="fav-pic" alt="a" src={img2} />
          <p className="stars"></p>
          <p className="description">100% Naturel</p>
          <p className="description">Arômes doux et délicats</p>
          <p className="description">Fragrance florale et fruitée</p>
          <p className="price"> 48,99$ </p>
          <button> Ajouter au panier </button>
        </div>

        <div className="fav-card">
          <h4>Golden Sun</h4>
          <img className="fav-pic" alt="a" src={img3} />
          <p className="stars"></p>
          <p className="description">100% Naturel</p>
          <p className="description">Arômes doux et délicats</p>
          <p className="description">Fragrance florale et fruitée</p>
          <p className="price"> 39,40$ </p>
          <button> Ajouter au panier </button>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
