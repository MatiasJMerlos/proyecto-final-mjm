import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Ofertas from './components/Ofertas';
import ProductosDestacados from './components/ProductosDestacados';
import Login from './components/Login'; 
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/administracion" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/ofertas" element={<Ofertas />} />
        <Route path="/productosDestacados" element={<ProductosDestacados />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
