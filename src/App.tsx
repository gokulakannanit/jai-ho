import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavList from "./components/nav/NavList";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <header className="menu">
        <div className="menu_container">
          <img src="/src/assets/images/logo.png" height="70px" />
          <div>
            <NavList />
          </div>
        </div>
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
