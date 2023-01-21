import "./App.scss";

import Navbar from "./Components/Navbar/Navbar";
import MenuOverlay from "./Components/MenuOverlay/MenuOverlay";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MenuOverlay />
      <Routes>
        <Route path="/" element={<h1>Hello</h1>} />
      </Routes>
    </div>
  );
}

export default App;
