import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import { CheckOut, ProductPage, SearchResult } from "./Component";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search" element={<SearchResult />}></Route>
        <Route path="/productpage/:id" element={<ProductPage />}></Route>
        <Route path="/checkout" element={<CheckOut />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
