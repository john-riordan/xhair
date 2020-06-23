import React, { useState, useCallback } from "react";

import {
  BackgroundImage,
  BtnsFrame,
  Btns,
  BtnGrp,
  Btn,
  RangeTitle
} from "./styled";
import { images, ranges, maps, defaultViewSettings } from "../../constants";
import { getEnvironmentImage } from "./utils";

const Environment = ({ children }) => {
  const [view, setView] = useState(defaultViewSettings);
  const selectedImage = getEnvironmentImage("cropped", view, images);

  const handleClick = useCallback(e => {
    const target = e.target;
    switch (target.name) {
      case "player":
        setView(prev => ({ ...prev, mode: "player" }));
        break;
      case "map":
        setView(prev => ({ ...prev, mode: "map" }));
        break;
      case "close":
        setView(prev => ({ ...prev, range: "close" }));
        break;
      case "medium":
        setView(prev => ({ ...prev, range: "medium" }));
        break;
      case "far":
        setView(prev => ({ ...prev, range: "far" }));
        break;
      case "haven":
        setView(prev => ({ ...prev, map: "haven" }));
        break;
      case "bind":
        setView(prev => ({ ...prev, map: "bind" }));
        break;
      case "split":
        setView(prev => ({ ...prev, map: "split" }));
        break;
      default:
        break;
    }
  }, []);

  return (
    <BackgroundImage
      style={{
        backgroundImage: `url(${selectedImage})`
      }}
    >
      {children}
      <BtnsFrame>
        <ModeBtns view={view} handleClick={handleClick} />
        {view.mode === "player" && (
          <RangeBtns view={view} handleClick={handleClick} />
        )}
        {view.mode === "map" && (
          <MapBtns view={view} handleClick={handleClick} />
        )}
      </BtnsFrame>
    </BackgroundImage>
  );
};

export default Environment;

const ModeBtns = ({ view, handleClick }) => (
  <BtnGrp>
    <RangeTitle>View:</RangeTitle>
    <Btns>
      <Btn
        name="player"
        className={view.mode === "player" && "active"}
        onClick={handleClick}
      >
        Player
      </Btn>
      <Btn
        name="map"
        className={view.mode === "map" && "active"}
        onClick={handleClick}
      >
        Map
      </Btn>
    </Btns>
  </BtnGrp>
);

const RangeBtns = ({ view, handleClick }) => (
  <BtnGrp>
    <RangeTitle>Range View Distance:</RangeTitle>
    <Btns>
      {ranges.map(range => (
        <Btn
          key={range.key}
          name={range.key}
          className={view.range === range.key && "active"}
          onClick={handleClick}
        >
          {range.name}
        </Btn>
      ))}
    </Btns>
  </BtnGrp>
);

const MapBtns = ({ view, handleClick }) => (
  <BtnGrp>
    <RangeTitle>Map:</RangeTitle>
    <Btns>
      {maps.map(map => (
        <Btn
          key={map.key}
          name={map.key}
          className={view.map === map.key && "active"}
          onClick={handleClick}
        >
          {map.name}
        </Btn>
      ))}
    </Btns>
  </BtnGrp>
);
