import React from "react";
import "../styles/Header.css";
import profile from "../assets/img/PP_2022.jpg";
import profile2 from "../assets/img/PP_2022_bis.jpg";
import githublogo from "../assets/logos/github.png";

const Header = () => {
  return (
    <div className="header">
      {/*<h1>Portfolio</h1>*/}
      <img
        className="profile"
        src={profile2}
        alt="profil de François Chevalier"
      />
      <h2>François CHEVALIER</h2>
      <p>Développeur Front-End React JS</p>
      <a
        href="https://github.com/FCHDev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={githublogo} alt="logo github" className="github-logo" />
      </a>
    </div>
  );
};

export default Header;
