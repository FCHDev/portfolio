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
  const showApp = () => {
    setDisplay(
      <div className="playground">
        {portfoliodb
          .filter((pf) => pf.type.includes("App"))
          .map(
            ({
              name,
              id,
              url,
              cover,
              type,
              description,
              api,
              apiUrl,
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
                type={type}
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
  const showFeatures = () => {
    setDisplay(
      <div className="playground">
        {portfoliodb
          .filter((pf) => pf.type.includes("Feature"))
          .map(
            ({
              name,
              id,
              url,
              cover,
              type,
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
                type={type}
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
  const showSites = () => {
    setDisplay(
      <div className="playground">
        {portfoliodb
          .filter((pf) => pf.type.includes("Site"))
          .map(
            ({
              name,
              id,
              url,
              cover,
              type,
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
                type={type}
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
      <div className="by-techno">
        <div className="title-sort-techno">Par techno</div>
        <input type="button" value="All projects" onClick={showAll} />
        <input type="button" value="React projects" onClick={showReact} />
      </div>
      <div className="by-type">
        <div className="title-sort-type">Par type</div>
        <input type="button" value="Features" onClick={showFeatures} />
        <input type="button" value="Applications web" onClick={showApp} />
        <input type="button" value="Sites 'vitrine'" onClick={showSites} />
      </div>
    </div>
  );
};

export default Selector;
