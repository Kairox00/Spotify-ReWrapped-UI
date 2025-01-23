import "./App.css";
import SimpleTopUserData from "../features/top-simple/components/SimpleTopUserData";
import LoginDialog from "../features/authentication/components/LoginDialog";
import { BrowserRouter, Route, Routes } from "react-router";
import Callback from "../features/authentication/components/Callback";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginDialog />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/top" element={<SimpleTopUserData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
