import { HashRouter, Routes, Route,Navigate } from "react-router-dom";
import './App.css';

import Home from "./Home";
import Page1 from "./Page1";
import ErrorPage from "./ErrorPage";

function App() {
  return (
    <div className="App">
     <HashRouter>
      <Routes>
           <Route path="/" element={<Home />} />
            <Route path="/page1" element={<Page1 />} />
            {/*<Route path='*' element={<ErrorPage />}/>*/}
            <Route path='/404' element={<ErrorPage/>} />
            <Route path='*' element={<Navigate replace to='/404'/>} />
          </Routes></HashRouter>
    </div>
  );
}

export default App;
