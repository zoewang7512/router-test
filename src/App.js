import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Home from "./Home";
import Page1 from "./Page1";
import ErrorPage from "./ErrorPage";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/1" element={<Page1 />} />
            <Route path='*' element={<ErrorPage />}/>
          </Routes></BrowserRouter>
    </div>
  );
}

export default App;
