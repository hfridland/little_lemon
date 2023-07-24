import './App.css';
import { Routes, Route } from "react-router-dom";
import Hero from './components/main/hero/Hero';
import About from './components/main/about/About';
import Header from './components/header/Header';
// import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Higthlights from './components/main/higthlights/Higthlights';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Hero/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/menu" element={<Higthlights/>}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
