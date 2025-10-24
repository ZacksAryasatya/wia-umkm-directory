import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DaftarUmkm from "./pages/pages-daftar-umkm";
import HomePage from "./pages/pages-homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/daftar-umkm" element={<DaftarUmkm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
