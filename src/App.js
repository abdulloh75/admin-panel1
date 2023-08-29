import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavbarNested } from "../src/components/Navbar";
import './App.css';
import Home from './page/Home';
import Message from "./page/Message";
import Product from "./page/Product";
import Report from "./page/Report";
import Support from "./page/Support";
import Team from "./page/Team";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavbarNested/>  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reports" element={<Report />} />
          <Route path="/product" element={<Product />} />
          <Route path="/team" element={<Team />} />
          <Route path="/message" element={<Message />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
