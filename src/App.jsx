import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/Home/Home';
import Services from './page/Services/Services';
import Contact from './page/Contact/Contact';
import About from './page/About/About';
import Faq from './page/Faq/Faq';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/navbar';
import Footer from './components/Footer/Footer';



function App() {

  return (
    <BrowserRouter className='app'>
      <NavBar/>
      <Routes>
 HEAD
        {/* <Route path='/' element={< Hero />} /> */}
        <Route path='/servicios' element={<Services/>}/>
=======
        <Route path='/' element={< Home />} />
        <Route path='/services' element={<Services/>}/>
develop
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/faq' element={<Faq/>}/>
        
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App
