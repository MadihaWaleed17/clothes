import {BrowserRouter , Routes, Route} from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import 'animate.css';
import Layout from './app/Layout';
import NotFound from './app/NotFound';
import Home from './app/Home';
import About from './app/About';
import Gallery from './app/Gallery';
import Delivery from './app/Delivery';
import Contact from './app/Contact';

const  App =()=>  {
  return (
    <div className='animate__animated animate__fadeIn animate__slower '>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Layout />} >
       <Route path='/' element={<Home />} />
      <Route path='home' element={<Home />} />
      <Route path='about'element={<About />} />
      <Route path='gallery'element={<Gallery />} />
      <Route path='delivery'element={<Delivery />} />
      <Route path='contact-us'element={<Contact />} /> 
      </Route>
    <Route path='*' element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
