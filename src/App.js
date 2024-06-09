import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Home from "./Home";
import Page1 from "./Page1";

function App() {
  return (
    <div className="App">
     <HashRouter>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/1" element={<Page1 />} />
          </Routes></HashRouter>
    </div>
  );
}

export default App;
