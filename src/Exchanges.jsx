import React from 'react';

    function Exchanges() {
      return (
        <div className="exchanges-content">
          <div className="exchange-card">
            <h2>Trending Coins</h2>
            <ul>
              <li>ESE - $0.03193</li>
              <li>BTC - $94,859.14</li>
              <li>ETH - $3,350.08</li>
              <li>XRP - $2.29</li>
              <li>SOL - $197.35</li>
            </ul>
          </div>
          <div className="exchange-card">
            <h2>Trending on DexScan</h2>
            <ul>
              <li>Alice/SOL - $0.002405</li>
              <li>LLM/SOL - $0.07112</li>
              <li>STNG/SOL - $0.0004140</li>
              <li>JUNJUN/SOL - $0.001219</li>
              <li>CORTEX/SOL - $0.0007990</li>
            </ul>
          </div>
          <div className="exchange-card">
            <h2>Market Cap</h2>
            <p>$3.33T</p>
          </div>
          <div className="exchange-card">
            <h2>CMC100</h2>
            <p>$205.21</p>
          </div>
          <div className="exchange-card">
            <h2>Fear & Greed</h2>
             <p>54 Neutral</p>
          </div>
        </div>
      );
    }

    export default Exchanges;
