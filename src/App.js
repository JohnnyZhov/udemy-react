import { Route, Routes, BrowserRouter } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMetup from "./pages/NewMeetup";
import Favourites from "./pages/Favourites";
import Layout from "./components/layout/Layout";
import { FavoritesContextProvider} from './store/favorites-context';

function App() {
  return (
    <div>
      <FavoritesContextProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<AllMeetupsPage />} />
            <Route path="/new-meetup" element={<NewMetup />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </Layout>
      </BrowserRouter>
      </FavoritesContextProvider>
    </div>
  );
}

export default App;
