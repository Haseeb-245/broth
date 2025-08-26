
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductCarousel from './components/Products'
import './index.css'; // or import './App.css';
import Broth from './components/Broth';
import Benefits from './components/Benefits';
import Yourbroth from './components/Yourborth';
import ShopBroth from './components/shopBroth'
import Reviews from './components/reviews';
import Table from './components/table';
import Card from './components/card';
import Inspired from './components/inspired';
import Footer from './components/footer';

function App() {

  return (
<div>

  <Navbar/>
  <Hero/>
  <ProductCarousel/>
  <Broth/>
  <Benefits/>
  <Yourbroth/>
  <ShopBroth/>
  <Reviews/>
  <Table/>
  <Inspired/>
  <Footer/>
 


</div>
  )
}

export default App
