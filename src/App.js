import React from "react";
import { Routes, Route } from "react-router-dom";

import Group from "./pages/group";

function App() {
  return (
    <div className="wrapper">
      <div className="content">
        <Routes>
          <Route path="/" element={<Group />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
