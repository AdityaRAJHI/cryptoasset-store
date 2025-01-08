import React from 'react';

    function Products() {
      return (
        <div className="products-content">
          <div className="products-section">
            <h2>Products</h2>
            <ul className="products-list">
              <li>Converter</li>
              <li>Newsletter</li>
              <li>CMC Labs</li>
              <li>Telegram Bot</li>
              <li>Advertise</li>
              <li>Crypto API</li>
              <li>Site Widgets</li>
            </ul>
          </div>
          <div className="products-section">
            <h2>Campaigns</h2>
            <ul className="products-list">
              <li>Airdrops</li>
              <li>Diamond Rewards</li>
              <li>Learn & Earn</li>
            </ul>
          </div>
          <div className="products-section">
            <h2>Calendars</h2>
            <ul className="products-list">
              <li>ICO Calendar</li>
              <li>Events Calendar</li>
            </ul>
          </div>
          <div className="products-section">
            <h2>Learn</h2>
            <ul className="products-list">
              <li>News</li>
              <li>Academy</li>
              <li>Research</li>
              <li>Videos</li>
              <li>Glossary</li>
            </ul>
          </div>
        </div>
      );
    }

    export default Products;
