import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/HomePage/Home';
import Footer from './components/pages/Footer/Footer';
import Produk from './components/pages/ProductPage/Produk';
import Hubungi from './components/Hubungi';


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component>{Home}</Route>
        <Route path='/produk' exact component>{Produk}</Route>
        <Route path='/hubungi' exact component>{Hubungi}</Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
