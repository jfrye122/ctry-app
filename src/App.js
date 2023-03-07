import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/HomePage/Home";
import CountryDetail from "./pages/CountryDetail";
import LanguageDetail from "./pages/LanguageDetail";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        {
          //PF Will need to add in routes that can support a path like `/country/:id`
          //Make sure the component can accept the prop to figure out which id is being passed.
        }
        <Route path="country/:countryId" element={<CountryDetail />} />
        <Route path="language/:languageId" element={<LanguageDetail />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
