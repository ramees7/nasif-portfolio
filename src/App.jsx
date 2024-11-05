import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    document.body.dir = i18n.dir(); // use is when the normal language write in left to right but arabic like language write in right to left so that change is adding into body  and the i18n.dir will automatically get the language direction
  }, [i18n, i18n.language]);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
