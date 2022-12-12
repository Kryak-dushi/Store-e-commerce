import './index.css';
import './components/mainpage/card/card.css';
import './components/footer/footer.css';
import './components/header/header.css';
import './components/cartpage/cart/cart.css';
import './components/cartpage/cartcard/cartcard.css';

import { Page } from './components/mainpage/Page';
import { CartPage } from './components/cartpage/CartPage';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}