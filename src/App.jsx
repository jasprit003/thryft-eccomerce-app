import React from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Product from './pages/Product';
import NotFound from './pages/NotFound';
import SearchResults from './pages/SearchResults';
import { CartProvider } from './context/CartContext';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <AppContainer>
          <Header>
            <Navbar />
          </Header>
          <Main>
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/shop"
                element={<Shop />}
              />
              <Route
                path="/product/:productId"
                element={<Product />}
              />
              <Route
                path="/cart"
                element={<Cart />}
              />
              <Route
                path="/search"
                element={<SearchResults />}
              />
              <Route
                path="/signin"
                element={<SignIn />}
              />
              <Route
                path="/signup"
                element={<SignUp />}
              />
              <Route
                path="*"
                element={<NotFound />}
              />
            </Routes>
          </Main>
          <FooterWrapper>
            <Footer />
          </FooterWrapper>
        </AppContainer>
      </CartProvider>
    </AuthProvider>
  );
};

const AppContainer = styled.div`
  // display: grid;
  // grid-template-areas:
  //   'header'
  //   'main'
  //   'footer';
  // grid-template-rows: auto 1fr auto;
  // min-height: 100vh;
`;

const Header = styled.header`
  grid-area: header;
  position: sticky;
  top: 0;
  z-index: 1000;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Main = styled.main`
  // grid-area: main;
  // padding: 2rem;
  // width: 100%;
  // max-width: 1200px;
  // margin: 0 auto;
  // min-height: calc(
  //   100vh - 160px
  // ); /* Adjust based on your header/footer height */
`;

const FooterWrapper = styled.footer`
  grid-area: footer;
  background: #f8f8f8;
`;

export default App;
