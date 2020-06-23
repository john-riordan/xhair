import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import GlobalStyle from "./components/globalStyle";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Route exact path="/" component={Settings} />
      </Router>
    </div>
  );
}
