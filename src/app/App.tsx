import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import ScrollToTop from "../components/ScrollToTop";
import AlbumPage from "../features/album-dashboard/components/AlbumPage";
import ArtistPage from "../features/artist-dashboard/components/ArtistPage";
import AuthenticationDialog from "../features/authentication/components/AuthenticationDialog";
import Callback from "../features/authentication/components/Callback";
import RequireAuth from "../features/authentication/components/RequireAuth";
import TrackPage from "../features/track-dashboard/components/TrackPage";
import UserTopData from "../features/user-dashboard/components/UserTopData";
import AlertProvider from "../stores/AlertProvider";
import "./App.css";

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
    text: {
      primary: "rgb(255, 255, 255)",
    },
  },
  typography: {
    fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
    h4: {
      fontWeight: "bold",
    },
    h6: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "rgb(255, 255, 255)",
    },
    body1: {
      fontSize: "16px",
      fontWeight: "bold",
      color: "rgb(163, 163, 163)",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AlertProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<AuthenticationDialog />} />
            <Route path="/callback" element={<Callback />} />
            <Route element={<RequireAuth />}>
              <Route path="/top" element={<UserTopData />} />
              <Route path="/artist/:id" element={<ArtistPage />} />
              <Route path="/tracks/:id" element={<TrackPage />} />
              <Route path="/albums/:id" element={<AlbumPage />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </AlertProvider>
    </ThemeProvider>
  );
}

export default App;
