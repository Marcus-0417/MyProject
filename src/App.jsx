import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Temple from "./Temple";


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Temple />} />
      </Routes>
    </HashRouter>
  );
}

export default App;