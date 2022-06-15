import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import Navbar from "./components/Navbar";
import SingleReview from "./pages/SingleReview";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <Header />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/categories/:category" element={<Reviews />} />
            <Route path="/reviews/:review_id" element={<SingleReview />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
