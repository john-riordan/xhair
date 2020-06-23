import React, { useState, useRef, useCallback } from "react";
import qs from "qs";
import store from "store";

import { ShareBar, SettingsText, Button, Saved, SavedItem } from "./styled";

const prefix = "https://8nkns.csb.app/?";

const Share = ({ settings, setSettings }) => {
  const savedSettings = store.get("settings") || [];
  const [copied, setCopied] = useState(false);
  const [savedCrosshairs, setSavedCrosshairs] = useState(savedSettings);
  const textAreaRef = useRef(null);
  const queryString = qs.stringify(settings);

  const handleCopy = useCallback(() => {
    textAreaRef.current.select();
    document.execCommand("copy");
    setCopied(true);

    let timer1 = setTimeout(() => {
      setCopied(false);
    }, 1200);

    return () => {
      clearTimeout(timer1);
    };
  }, []);

  const handleSave = useCallback(() => {
    const savedLength = savedCrosshairs.length || 0;
    const settingsToSave = { ...settings };
    if (settingsToSave.title === "default") {
      settingsToSave.title = `default ${savedLength + 1}`;
    }
    store.set("settings", [...savedSettings, settingsToSave]);
    setSavedCrosshairs(prev => [...prev, settingsToSave]);
  }, [savedCrosshairs]);

  const handleSavedClick = useCallback(e => {
    const clickedTitle = e.currentTarget.dataset.title;
    console.log(clickedTitle);
  }, []);

  return (
    <>
      <ShareBar>
        <Button red className={copied && "copied"} onClick={handleCopy}>
          {copied ? "Copied!" : "Share"}
          <div className="dots dots1" />
          <div className="dots dots2" />
        </Button>
        {/* <Button onClick={handleSave}>
          <span>Save</span>
          <div className="dots dots1" />
          <div className="dots dots2" />
        </Button> */}
        {/* <pre
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(settings, null, 2)
        }}
      /> */}
      </ShareBar>
      {/* {savedCrosshairs.length ? (
        <Saved>
          {savedCrosshairs.map((saved, index) => (
            <SavedItem
              key={index}
              data-title={saved.title}
              onClick={handleSavedClick}
            >
              {saved.title}
            </SavedItem>
          ))}
        </Saved>
      ) : (
        "No saved Crosshairs"
      )} */}
      <SettingsText
        ref={textAreaRef}
        value={`${prefix}${queryString}`}
        readOnly
      />
    </>
  );
};

export default Share;
