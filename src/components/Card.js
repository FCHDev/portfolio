import React from "react";
import "../styles/Card.css";
import githublogo from "../assets/logos/github.png";
import { motion } from "framer-motion";

const Card = ({
  name,
  url,
  cover,
  description,
  api,
  apiUrl,
  git,
  toolsLogo,
  toolsLogo2,
  toolsLogo3,
  toolsLogo4,
}) => {
  //  Mise en place des animations d'apparition de cartes
  const variants = {
    initial: {
      opacity: 0,
      transition: { duration: 2 },
    },
    visible: {
      opacity: 1,
    },
    exit: {
      opacity: 0.5,
      transition: { duration: 2 },
    },
  };

  const transition = {
    ease: [0.03, 0.87, 0.73, 0.9],
    duration: 0.6,
  };

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
    <motion.li
      className="card"
      initial="initial"
      animate="visible"
      exit="exit"
      transition={transition}
      variants={variants}
    >
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
        <h2 style={{ paddingBottom: "5px" }}>{name}</h2>
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
        {git ? (
          <h3>
            <a href={git} rel="noopener noreferrer" target="_blank">
              <img
                src={githublogo}
                alt="logo github"
                style={{ width: "30px", height: "auto" }}
              />
            </a>
          </h3>
        ) : (
          ""
        )}
      </div>
    </motion.li>
  );
};

export default Card;
