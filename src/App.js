import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
