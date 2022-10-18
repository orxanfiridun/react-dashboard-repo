import "./App.css";
import SideBar from "./components/SideBar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Wallet from "./components/Wallet";

function App() {
  return (
    <div className="App">
      <SideBar />
      <Router>
        <Routes>
          <Route exact path="/wallet" element={Wallet} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
