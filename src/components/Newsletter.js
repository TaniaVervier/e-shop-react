import React from "react";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <h2>Newsletter</h2>
      <p>__________</p>
      <p className="suscribe">Inscrivez-vous pour ne rien manquer !</p>
      <input type="email" name="email" required autoComplete="off" className="email" placeholder="Votre adresse e-mail" />
      <button className="emailbtn">VALIDER</button>
    </div>
  );
};

export default Newsletter;
