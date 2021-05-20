import React, { memo, useState, useEffect } from "react";
import { csv } from "d3-fetch";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";
import FreedomCalculator from "../FreedomCalculator";

import allStates from "./data/allstates.json";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const MapChart = ({ setTooltipContent }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    csv(`/freedom.csv`).then((data) => {
      setData(data);
    });
  }, []);

  return (
    <ComposableMap data-tip="" projection="geoAlbersUsa">
      <Geographies geography={geoUrl}>
        {({ geographies }) => (
          <>
            {geographies.map(geo => {
              const d = data.find((s) => s.Name === geo.properties.name);
              return <Geography
                key={geo.rsmKey}
                stroke="#FFF"
                geography={geo}
                fill={d ? FreedomCalculator(d) : "#D6D6DA"}
                onMouseEnter={() => {
                    const NAME = geo.properties.name;
                    setTooltipContent(NAME);
                }}
                onMouseLeave={() => {
                    setTooltipContent("");
                }}
                /*style={{
                    default: {
                      fill: "#D6D6DA",
                      outline: "none"
                    },
                    hover: {
                      fill: "#F53",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none"
                    }
                }}*/
              />
              })}
          </>
        )}
      </Geographies>
    </ComposableMap>
  );
};

export default MapChart;
