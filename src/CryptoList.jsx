import React, { useState, useEffect } from 'react';

    function CryptoList() {
      const [cryptoData, setCryptoData] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);

      useEffect(() => {
        const fetchCryptoData = async () => {
          try {
            const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setCryptoData(data);
            setLoading(false);
          } catch (e) {
            setError(e);
            setLoading(false);
          }
        };

        fetchCryptoData();
      }, []);

      if (loading) {
        return <div className="container">Loading...</div>;
      }

      if (error) {
        return <div className="container">Error: {error.message}</div>;
      }

      return (
        <div>
          <h1>Top 10 Cryptocurrencies</h1>
          <ul className="crypto-list">
            {cryptoData.map((crypto) => (
              <li key={crypto.id} className="crypto-card">
                <h2>{crypto.name}</h2>
                <p><strong>Symbol:</strong> {crypto.symbol.toUpperCase()}</p>
                <p><strong>Price:</strong> ${crypto.current_price}</p>
                <p><strong>Market Cap:</strong> ${crypto.market_cap}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    export default CryptoList;
