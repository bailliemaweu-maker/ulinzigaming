
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproduct from './components/Addproduct';
import Getproducts from './components/Getproducts';
import Makepayment from './components/Makepayment';
import Footer from './components/Footer';
import Competition from './components/Competition';
import Aboutus from './components/Aboutus';
import Chatbot from './components/Chatbot';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import { CartProvider } from './components/CartContext';
import { AuthProvider } from './components/AuthContext';

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <div className="App " >
        <header className="App-header bg-warning">
          <h1 className='bungee-regular' >Ulinzi Gaming welcome you </h1>
        </header>

        <Navbar />

        <Routes>
          <Route path='/' element={<Getproducts />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Signin />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/addproduct' element={<Addproduct />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/makepayment' element={<Makepayment />} />
          <Route path='/competition' element={<Competition />} />
          <Route path='/aboutus' element={<Aboutus />} />


        </Routes>

        <Footer />
        <Chatbot />

      </div>
      </CartProvider>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
