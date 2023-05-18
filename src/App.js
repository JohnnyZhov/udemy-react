import { Route, Routes, BrowserRouter } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMetup from "./pages/NewMeetup";
import Favourites from "./pages/Favourites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<AllMeetupsPage />} />
            <Route path="/new-meetup" element={<NewMetup />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
