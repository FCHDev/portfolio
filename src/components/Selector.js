import React from "react";
import "../styles/Selector.css";
import { portfoliodb } from "../datas/portfoliodb";
import Card from "./Card";

const Selector = ({ setDisplay }) => {
  const showReact = () => {
    setDisplay(
      <div className="playground">
        {portfoliodb
          .filter((pf) => pf.tools.includes("React-JS"))
          .map(
            ({
              name,
              id,
              url,
              cover,
              description,
              api,
              apiUrl,
              tools,
              toolsLogo,
              toolsLogo2,
              toolsLogo3,
              toolsLogo4,
            }) => (
              <Card
                key={id}
                cover={cover}
                name={name}
                url={url}
                description={description}
                api={api}
                apiUrl={apiUrl}
                toolsLogo={toolsLogo}
                toolsLogo2={toolsLogo2}
                toolsLogo3={toolsLogo3}
                toolsLogo4={toolsLogo4}
              />
            )
          )}
      </div>
    );
  };
  const showAll = () => {
    setDisplay(
      <div className="playground">
        {portfoliodb
          .sort((a, b) => b.name - a.name)
          .map(
            ({
              name,
              id,
              url,
              cover,
              description,
              api,
              apiUrl,
              tools,
              toolsLogo,
              toolsLogo2,
              toolsLogo3,
              toolsLogo4,
            }) => (
              <Card
                key={id}
                cover={cover}
                name={name}
                url={url}
                description={description}
                api={api}
                apiUrl={apiUrl}
                toolsLogo={toolsLogo}
                toolsLogo2={toolsLogo2}
                toolsLogo3={toolsLogo3}
                toolsLogo4={toolsLogo4}
              />
            )
          )}
      </div>
    );
  };

  return (
    <div className="container">
      <input type="button" value="All projects" onClick={showAll} />
      <input type="button" value="React projects" onClick={showReact} />
    </div>
  );
};

export default Selector;
