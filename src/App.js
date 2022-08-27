import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './component/layout/Header';
import Footer from './component/layout/Footer';

import HomePage from './pages/HomePage';
import SedesPage from './pages/Sedespage';
import CompartiPage from './pages/CompartiPage';
import ProductosPage from './pages/ProductosPage';


import './App.css';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="Productos" element={<ProductosPage />} />
            <Route path="Sedes" element={<SedesPage />} />
            <Route path="Comparti" element={<CompartiPage />} />
          </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
