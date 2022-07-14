import React from "react";
import "../styles/Card.css";

const Card = ({
  name,
  url,
  cover,
  description,
  api,
  apiUrl,
  toolsLogo,
  toolsLogo2,
  toolsLogo3,
  toolsLogo4,
}) => {
  //  les const logo3 et logo4 permettent d'afficher OU NON le 3ème et 4ème logo (s'ils existent) d'un projet
  const logo3 = toolsLogo3 ? (
    <img src={toolsLogo3} alt="logo technologie utilisée" />
  ) : (
    <p></p>
  );
  const logo4 = toolsLogo4 ? (
    <img src={toolsLogo4} alt="logo technologie utilisée" />
  ) : (
    <p></p>
  );

  return (
    <li className="card">
      {/*  Recto de la carte projet*/}
      <h1 style={{ textAlign: "center" }}>{name}</h1>
      <a href={url} rel="noopener">
        <img className="picture" src={cover} alt={name} />
      </a>
      <div className="tools-logo">
        <img src={toolsLogo} alt="logo technologie utilisée" />
        <img src={toolsLogo2} alt="logo technologie utilisée" />
        {logo3}
        {logo4}
      </div>

      {/*  Verso de la carte projet*/}
      <div className="infos">
        <h2>{name}</h2>
        <p>{description}</p>
        <br />
        <p>
          {api}
          <br />
          <a href={apiUrl} rel="noopener noreferrer" target="_blank">
            {apiUrl}
          </a>
        </p>
        <h3>
          <a href={url} rel="noopener noreferrer" target="_blank">
            Accès au projet
          </a>
        </h3>
      </div>
    </li>
  );
};

export default Card;
