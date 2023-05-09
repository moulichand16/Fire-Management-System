import logo from './logo.svg';
import './App.css';
import Nav1 from './components/Nav.js'
import Homes from './components/Homes.js'
import Home1 from './components/Home1.js'
import Carosal from './components/Carosal.js'
import TestPage from './components/TestPage.js'
import {useState} from "react";
import Home from './components/Home'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [x,setx]=useState(0);

  return (
    <div className="container-fluid">
      <Nav1 ppt={setx}/>
      {/* <Homes nag={x} pra={setx}/> */}
      {/* <Carosal /> */}
      {/* <Home1 /> */}
      {/* <TestPage /> */}

      
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Homes nag={x} pra={setx}/>}/>
          <Route path="TestPage" element={<TestPage />} />
          <Route path="Home" element={<Home />}/>
          {/* <Route path="Home1" element={<Home1 />} />
          <Route path="Carosal" element={<Carosal />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </div>

  );
}

export default App;
