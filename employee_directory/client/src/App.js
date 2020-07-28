import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import tablePage from "./pages/tablePage";

function App() {
  return (
    <Router>
    <Route path="/" component={tablePage} />
    </Router>
  );
}

export default App;
