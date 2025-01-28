import "./App.css";
import UserTopData from "../features/user-dashboard/components/UserTopData";
import AuthenticationDialog from "../features/authentication/components/AuthenticationDialog";
import { BrowserRouter, Route, Routes } from "react-router";
import Callback from "../features/authentication/components/Callback";
import ArtistPage from "../features/artist-dashboard/components/ArtistPage";
import ScrollToTop from "../components/ScrollToTop";
import TrackPage from "../features/track-dashboard/components/TrackPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<AuthenticationDialog />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/top" element={<UserTopData />} />
        <Route path="/artist/:id" element={<ArtistPage />} />
        <Route path="/tracks/:id" element={<TrackPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
