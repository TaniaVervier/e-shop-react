import React from "react";
import Favorites from "../components/Favorites";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import ScrollButton from './../components/ScrollButton';


const Home = () => {
  const img = new URL("../../public/img/apropos.png", import.meta.url);


  return (
    <div>
      <div className="home">
        <Navbar />
        <ScrollButton />
        <div className="headerimg"></div>
        <Favorites />
        <div className="wrapper">
          <div className="about">
            <h2>A PROPOS</h2>
            <p>__________</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
              varius metus, a sagittis magna. Aenean varius metus quis nulla
              consectetur, id luctus libero ullamcorper. Duis consectetur orci
              ut leo elementum faucibus. Sed dignissim interdum varius. Nunc
              hendrerit ipsum sed ante dignissim porta.
            </p>
            <div className="button">
              <button className="aboutbtn">LIRE LA SUITE</button>
            </div>
          </div>

          <div>
            <img src={img} alt="s" className="aboutimg" />
          </div>
        </div>

        <Newsletter />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
