import React, { useEffect, useRef } from "react";
import "../styles/Header.css";
import profile2 from "../assets/img/PP_2022_bis.jpg";
import githublogo from "../assets/logos/github.png";
import { gsap } from "gsap";

const Header = () => {
  const headerElements = useRef();
  useEffect(() => {
    gsap.fromTo(
      headerElements.current,
      { opacity: 0 },
      { opacity: 1, duration: 4 }
    );
  });

  const logoGithub = useRef();
  useEffect(() => {
    gsap.to(logoGithub.current, 6, {
      rotation: "+=360",
      repeat: -1,
      ease: "none",
    });
  });

  return (
    <div className="header">
      {/*<h1>Portfolio</h1>*/}
      <img
        className="profile"
        src={profile2}
        alt="profil de François Chevalier"
      />
      <div className="text-and-logo" ref={headerElements}>
        <h2>François CHEVALIER</h2>
        <p>Développeur Front-End React JS</p>
        <a
          href="https://github.com/FCHDev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={githublogo}
            alt="logo github"
            className="github-logo"
            ref={logoGithub}
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
