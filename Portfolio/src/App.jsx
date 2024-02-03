import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Workwise from "./pages/Workwise";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/about" Component={About}></Route>
          {/* <Route path="/projects" Component={Projects}></Route> */}
          <Route path="/workwise" Component={Workwise}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
