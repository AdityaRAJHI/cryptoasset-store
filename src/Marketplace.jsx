import React from 'react';

    function Marketplace() {
      return (
        <div className="marketplace-content">
          <div className="marketplace-section">
            <h2>Cryptocurrencies</h2>
            <ul className="marketplace-list">
              <li>Ranking</li>
              <li>Categories</li>
              <li>Market Overview</li>
              <li>Historical Snapshots</li>
              <li>Crypto ETFs</li>
              <li>Token unlocks</li>
              <li>Yield</li>
            </ul>
          </div>
          <div className="marketplace-section">
            <h2>Leaderboards</h2>
            <ul className="marketplace-list">
              <li>Trending</li>
              <li>Upcoming</li>
              <li>Recently Added</li>
              <li>Gainers & Losers</li>
              <li>Most Visited</li>
              <li>Community Sentiment</li>
              <li>Chain Ranking</li>
            </ul>
          </div>
          <div className="marketplace-section">
            <h2>NFT</h2>
            <ul className="marketplace-list">
              <li>Overall NFT Stats</li>
              <li>Upcoming Sales</li>
            </ul>
          </div>
        </div>
      );
    }

    export default Marketplace;
