import React, { useState, useCallback, useMemo } from "react";
import qs from "qs";

import { boolean_map, colors, defaultSettings } from "../../constants";
import Environment from "../../components/Environment";
import Share from "../../components/Share";
import Crosshair from "../../components/Crosshair";
import Select from "../../components/Select";
import Setting from "../../components/Setting";
import Toggle from "../../components/Toggle";
import Range from "../../components/Range";

// TODO: Convery query string booleans and numbers

const Settings = ({ location }) => {
  const query = new URLSearchParams(location.search).toString();
  const querySettings = useMemo(() => {
    return qs.parse(query.length ? query : defaultSettings);
  }, [query]);

  const [settings, setSettings] = useState(querySettings);

  const colorOptions = Object.entries(colors);

  const handleChange = useCallback(e => {
    const target = e.target;
    switch (target.name) {
      case "color":
        setSettings(prevState => ({ ...prevState, color: target.value }));
        break;
      case "outlines":
        setSettings(prevState => ({
          ...prevState,
          outlines: boolean_map[target.value]
        }));
        break;
      case "outline opacity":
        setSettings(prevState => ({
          ...prevState,
          outline_opacity: Number(target.value)
        }));
        break;
      case "outline thickness":
        setSettings(prevState => ({
          ...prevState,
          outline_thickness: Number(target.value)
        }));
        break;
      case "dot":
        setSettings(prevState => ({
          ...prevState,
          center_dot: boolean_map[target.value]
        }));
        break;
      case "dot opacity":
        setSettings(prevState => ({
          ...prevState,
          center_dot_opacity: Number(target.value)
        }));
        break;
      case "dot thickness":
        setSettings(prevState => ({
          ...prevState,
          center_dot_thickness: Number(target.value)
        }));
        break;
      case "fire error":
        setSettings(prevState => ({
          ...prevState,
          fade_fire_error: boolean_map[target.value]
        }));
        break;
      case "spectator":
        setSettings(prevState => ({
          ...prevState,
          show_teammate_crosshair: boolean_map[target.value]
        }));
        break;
      case "inner opacity":
        setSettings(prevState => ({
          ...prevState,
          inner_line_opacity: Number(target.value)
        }));
        break;
      case "inner length":
        setSettings(prevState => ({
          ...prevState,
          inner_line_length: Number(target.value)
        }));
        break;
      case "inner thickness":
        setSettings(prevState => ({
          ...prevState,
          inner_line_thickness: Number(target.value)
        }));
        break;
      case "inner offset":
        setSettings(prevState => ({
          ...prevState,
          inner_line_offset: Number(target.value)
        }));
        break;
      case "inner movement error":
        setSettings(prevState => ({
          ...prevState,
          inner_line_move_error: boolean_map[target.value]
        }));
        break;
      case "inner fire error":
        setSettings(prevState => ({
          ...prevState,
          inner_line_fire_error: boolean_map[target.value]
        }));
        break;
      case "outer opacity":
        setSettings(prevState => ({
          ...prevState,
          outer_line_opacity: Number(target.value)
        }));
        break;
      case "outer length":
        setSettings(prevState => ({
          ...prevState,
          outer_line_length: Number(target.value)
        }));
        break;
      case "outer thickness":
        setSettings(prevState => ({
          ...prevState,
          outer_line_thickness: Number(target.value)
        }));
        break;
      case "outer offset":
        setSettings(prevState => ({
          ...prevState,
          outer_line_offset: Number(target.value)
        }));
        break;
      case "outer movement error":
        setSettings(prevState => ({
          ...prevState,
          outer_line_move_error: boolean_map[target.value]
        }));
        break;
      case "outer fire error":
        setSettings(prevState => ({
          ...prevState,
          outer_line_fire_error: boolean_map[target.value]
        }));
        break;
      default:
        break;
    }
  }, []);

  return (
    <>
      <div className="frame">
        <div className="frame-crosshair">
          <h2 className="section-header">Preview</h2>
          <Environment>
            <Crosshair settings={settings} className="crosshair" />
          </Environment>
          <Share
            settings={settings}
            setSettings={setSettings}
            querySettings={querySettings}
          />
        </div>
        <div className="frame-settings">
          <div>
            <h2 className="section-header">General</h2>
            <div>
              <Setting
                label="Crosshair Color"
                input={
                  <Select
                    name="color"
                    onChange={handleChange}
                    value={settings.color}
                    options={colorOptions}
                  />
                }
              />
              <Setting
                label="Outlines"
                input={
                  <Toggle
                    name="outlines"
                    isActive={settings.outlines}
                    onChange={handleChange}
                  />
                }
              />
              <Setting
                label="Outline Opacity"
                disabled={!settings.outlines}
                input={
                  <Range
                    name="outline opacity"
                    min="0"
                    max="1"
                    step="0.1"
                    value={settings.outline_opacity}
                    onChange={handleChange}
                  />
                }
              />
              <Setting
                label="Outline Thickness"
                disabled={!settings.outlines}
                input={
                  <Range
                    name="outline thickness"
                    min="1"
                    max="6"
                    step="1"
                    value={settings.outline_thickness}
                    onChange={handleChange}
                  />
                }
              />
              <Setting
                label="Center Dot"
                input={
                  <Toggle
                    name="dot"
                    isActive={settings.center_dot}
                    onChange={handleChange}
                  />
                }
              />
              <Setting
                label="Center Dot Opacity"
                disabled={!boolean_map[settings.center_dot]}
                input={
                  <Range
                    name="dot opacity"
                    min="0"
                    max="1"
                    step="0.001"
                    value={settings.center_dot_opacity}
                    onChange={handleChange}
                  />
                }
              />
              <Setting
                label="Center Dot Thickness"
                disabled={!boolean_map[settings.center_dot]}
                input={
                  <Range
                    name="dot thickness"
                    min="1"
                    max="6"
                    step="1"
                    value={settings.center_dot_thickness}
                    onChange={handleChange}
                  />
                }
              />
              <Setting
                label="Fade Crosshair with Firing Error"
                input={
                  <Toggle
                    name="fire error"
                    isActive={settings.fade_fire_error}
                    onChange={handleChange}
                  />
                }
              />
              <Setting
                label="Show Spectated Player's Crosshair"
                input={
                  <Toggle
                    name="spectator"
                    isActive={settings.show_teammate_crosshair}
                    onChange={handleChange}
                  />
                }
              />
            </div>
          </div>
          <div>
            <h2 className="section-header">Inner Lines</h2>
            <div>
              <Setting
                label="Inner Line Opacity"
                input={
                  <Range
                    name="inner opacity"
                    min="0"
                    max="1"
                    step="0.001"
                    value={settings.inner_line_opacity}
                    onChange={handleChange}
                  />
                }
              />
              <Setting
                label="Inner Line Length"
                input={
                  <Range
                    name="inner length"
                    min="0"
                    max="20"
                    step="1"
                    value={settings.inner_line_length}
                    onChange={handleChange}
                  />
                }
              />
              <Setting
                label="Inner Line Thickness"
                input={
                  <Range
                    name="inner thickness"
                    min="0"
                    max="10"
                    step="1"
                    value={settings.inner_line_thickness}
                    onChange={handleChange}
                  />
                }
              />
              <Setting
                label="Inner Line Offset"
                disabled={Number(settings.inner_line_length) === 0}
                input={
                  <Range
                    type="range"
                    name="inner offset"
                    min="0"
                    max="20"
                    step="1"
                    value={settings.inner_line_offset}
                    onChange={handleChange}
                  />
                }
              />
              <Setting
                label="Movement Error"
                disabled={Number(settings.inner_line_length) === 0}
                input={
                  <Toggle
                    name="inner movement error"
                    isActive={settings.inner_line_move_error}
                    onChange={handleChange}
                  />
                }
              />
              <Setting
                label="Firing Error"
                disabled={Number(settings.inner_line_length) === 0}
                input={
                  <Toggle
                    name="inner fire error"
                    isActive={settings.inner_line_fire_error}
                    onChange={handleChange}
                  />
                }
              />
            </div>
          </div>
          <div>
            <h2 className="section-header">Outer Lines</h2>
            <div>
              <Setting
                label="Outer Line Opacity"
                input={
                  <Range
                    name="outer opacity"
                    min="0"
                    max="1"
                    step="0.001"
                    value={settings.outer_line_opacity}
                    onChange={handleChange}
                  />
                }
              />
              <Setting
                label="Outer Line Length"
                input={
                  <Range
                    name="outer length"
                    min="0"
                    max="20"
                    step="1"
                    value={settings.outer_line_length}
                    onChange={handleChange}
                  />
                }
              />
              <Setting
                label="Outer Line Thickness"
                input={
                  <Range
                    name="outer thickness"
                    min="0"
                    max="10"
                    step="1"
                    value={settings.outer_line_thickness}
                    onChange={handleChange}
                  />
                }
              />
              <Setting
                label="Outer Line Offset"
                disabled={Number(settings.outer_line_length) === 0}
                input={
                  <Range
                    name="outer offset"
                    min="0"
                    max="20"
                    step="1"
                    value={settings.outer_line_offset}
                    onChange={handleChange}
                  />
                }
              />
              <Setting
                label="Movement Error"
                disabled={Number(settings.outer_line_length) === 0}
                input={
                  <Toggle
                    name="outer movement error"
                    isActive={settings.outer_line_move_error}
                    onChange={handleChange}
                  />
                }
              />
              <Setting
                label="Firing Error"
                disabled={Number(settings.outer_line_length) === 0}
                input={
                  <Toggle
                    name="outer fire error"
                    isActive={settings.outer_line_fire_error}
                    onChange={handleChange}
                  />
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
