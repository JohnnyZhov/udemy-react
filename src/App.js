import { Route, Routes, BrowserRouter } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMetup from "./pages/NewMeetup";
import Favourites from "./pages/Favourites";

function App() {
  // localhost:3000/products

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllMeetupsPage />} />
          <Route path="/new-meetup" element={<NewMetup />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
