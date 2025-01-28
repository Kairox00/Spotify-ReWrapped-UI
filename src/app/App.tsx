import "./App.css";
import SimpleTopUserData from "../features/top-simple/components/SimpleTopUserData";
import AuthenticationDialog from "../features/authentication/components/AuthenticationDialog";
import { BrowserRouter, Route, Routes } from "react-router";
import Callback from "../features/authentication/components/Callback";
import ArtistPage from "../features/artist-dashboard/components/ArtistPage";
import ScrollToTop from "../components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<AuthenticationDialog />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/top" element={<SimpleTopUserData />} />
        <Route path="/artist/:id" element={<ArtistPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
