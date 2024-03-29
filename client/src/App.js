import './index.css';
import './components/mainpage/card/card.css';
import './components/mainpage/card/cardinfo.css';
import './components/footer/footer.css';
import './components/header/header.css';
import './components/cartpage/cart/cart.css';
import './components/cartpage/cartcard/cartcard.css';
import './components/login/login.css'

import { Page } from './components/mainpage/Page';
import { CartPage } from './components/cartpage/CartPage';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Registration } from './components/login/Registration';
import { Login } from './components/login/Login';
import { Cardinfo } from './components/mainpage/card/CardInfo';

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Order } from './components/cartpage/Order';

export default function App() {
  return (
    <Router>
      <div className="root">
        <Header />
        <Routes>
          <Route path="/cart" element={<CartPage />}>
          </Route>
          <Route path="/" element={<Page />}>
          </Route>
          <Route exact path="/goods/:id" element={<Cardinfo />}>
          </Route>
          <Route path="/registration" element={<Registration />}>
          </Route>
          <Route path="/login" element={<Login />}>
          </Route>
          <Route path="/order" element={<Order />}>
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}