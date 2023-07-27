import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Main/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
