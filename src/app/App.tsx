import "./App.css";
import UserTopData from "../features/user-dashboard/components/UserTopData";
import AuthenticationDialog from "../features/authentication/components/AuthenticationDialog";
import { BrowserRouter, Route, Routes } from "react-router";
import Callback from "../features/authentication/components/Callback";
import ArtistPage from "../features/artist-dashboard/components/ArtistPage";
import ScrollToTop from "../components/ScrollToTop";
import TrackPage from "../features/track-dashboard/components/TrackPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    secondary: {
      main: "rgb(30, 215, 96)",
      light: "rgb(30, 215, 96, 0.2)",
      contrastText: "rgb(255, 255, 255)",
    },
    primary: {
      main: "rgb(24, 24, 28)",
      light: "rgb(163, 163, 163)",
      dark: "rgb(17, 17, 18)",
      contrastText: "rgb(255, 255, 255)",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
