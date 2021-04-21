import React, { useState } from "react";
import MapChart from "../components/MapChart";
import ReactTooltip from "react-tooltip";


function App() {
    const [content, setContent] = useState("");
    return (
      <div>
        <MapChart setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>
      </div>
    );
  }
  

export default () => App()
