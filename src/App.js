import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './page/Home'
import Report from "./page/Report"
import Product from "./page/Product"
import Team from "./page/Team"
import Message from "./page/Message"
import Support from "./page/Support"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
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
