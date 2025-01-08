import React from 'react';
    import { Routes, Route, Link } from 'react-router-dom';
    import CryptoList from './CryptoList';
    import About from './About';
    import Marketplace from './Marketplace';
    import Wallet from './Wallet';
    import DexScan from './DexScan';
    import Exchanges from './Exchanges';
    import Community from './Community';
    import Products from './Products';

    function App() {
      return (
        <div style={{ display: 'flex' }}>
          <div className="sidebar">
            <Link to="/">Cryptocurrencies</Link>
            <Link to="/marketplace">Marketplace</Link>
            <Link to="/wallet">Wallet</Link>
            <Link to="/dexscan">DexScan</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/community">Community</Link>
             <Link to="/products">Products</Link>
            <Link to="/about">About</Link>
          </div>
          <div className="container">
            <div className="header">
              <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.png" alt="Bitcoin Logo" className="header-icon" />
              <h1>Crypto Dashboard</h1>
            </div>
            <Routes>
              <Route path="/" element={<CryptoList />} />
              <Route path="/about" element={<About />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/dexscan" element={<DexScan />} />
              <Route path="/exchanges" element={<Exchanges />} />
              <Route path="/community" element={<Community />} />
              <Route path="/products" element={<Products />} />
            </Routes>
          </div>
        </div>
      );
    }

    export default App;
