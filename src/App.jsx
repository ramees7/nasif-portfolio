import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./Components/Portfolio";
import { SettingsProvider } from "./context/SettingsContext";
import SettingSidebar from "./Components/SettingSidebar";

export default function App() {
  return (
    <SettingsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <SettingSidebar />
      </BrowserRouter>
    </SettingsProvider>
  );
}
