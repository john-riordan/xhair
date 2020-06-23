import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --bg: #0f1923;
    --black-bg: rgba(0,0,0,0.06);
    --white: rgba(255,255,255,1);
    --white-bg: rgba(255,255,255,0.06);
    --white-bg-hover: rgba(255,255,255,0.12);
    --white-bg-hover2: rgba(255,255,255,0.2);
    --white-active: rgba(255,255,255,0.27);
    --red: #ff4655;
    --red-hover: #fd5462;
    --green: #13ca97;
    --row-height: 3rem;
  }
  * {
    box-sizing: border-box;
  }
  ::selection {
    background: var(--red);
  }
  body,
  input,
  button,
  select {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-family: din-2014,sans-serif;
    font-style: normal;
    line-height: 1.5;
    color: var(--white);
    letter-spacing: 0.2px;
  }
  body {
    background: var(--bg);
    font-weight: 400;
    margin: 0;
    padding: 0;
  }
  input,
  button,
  select {
    letter-spacing: 0.5px;
  }
  button {
    appearance: none;
    border: none;
  }
  h1,h2,h3,h4,h5 {
    /* font-family: Tungsten-Bold,arial,georgia,sans-serif; */
  }
  .App {
    position: relative;
  }
  .frame {
    display:flex;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 1rem;

    @media screen and (max-width: 900px) {
      flex-direction: column;
    }
  }
  .frame-crosshair {
    position: sticky;
    top: 0;
    flex: 2;
    max-width: 500px;
    margin-right: 2rem;
    z-index: 11;

    @media screen and (max-width: 900px) {
      width: 100%;
      max-width: none;
      margin: 0;
      background: var(--bg);
    }
  }
  .frame-settings {
    flex: 3;
    margin-bottom: 10rem;

    @media screen and (max-width: 900px) {
      width: 100%;
    }
  }
  .section-header {
    font-weight: 800;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 1rem 0 0 0;
    line-height: 3;
  }
`;

export default GlobalStyle;
