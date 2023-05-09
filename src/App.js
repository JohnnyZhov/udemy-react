import { Route, Routes, BrowserRouter } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMetup from "./pages/NewMeetup";
import Favourites from "./pages/Favourites";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
        <BrowserRouter>
        <MainNavigation />
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
