import React, { useState } from "react";
import { portfoliodb } from "../datas/portfoliodb";
import "../styles/Playground.css";
import Card from "./Card";
import Selector from "./Selector";

const Playground = () => {
  const [display, setDisplay] = useState(
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
  function SortArray(x, y) {
    return x.name.localeCompare(y.name);
  }

  portfoliodb.sort(SortArray);

  return (
    <>
      <Selector setDisplay={setDisplay} />
      {display}
    </>
  );
};

export default Playground;
