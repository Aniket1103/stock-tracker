import React, { useState } from 'react'
import StockTable from './StockTable';
import { fetchStockData } from '../utils/stock-api';

export default function Dashboard() {
  const [ticker, setTicker] = useState(""); 
  const [date, setDate] = useState(""); 
  const [stockDetails, setStockDetails] = useState({});

  

  function handleSubmit(e) {
    e.preventDefault();
    
    // Fetching Stock Data
    fetchStockData({ ticker, date })
      .then(data => {
        console.log(data.data)
        setStockDetails(data.data);
      })
      .catch(error => {
        console.error("Error fetching stock data:", error);
      });
  }
  
  return (
    <div className="container">
      <section className="section">
        <div className="form-container">
          
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <div className="form-group">
                <label htmlFor="ticker" className="form-label">Ticker</label>
                <input type="text" name="ticker" id="ticker" className="form-input" placeholder="Ticker Name" value={ticker} onChange={(e) => setTicker(e.target.value)} required />
              </div>
              <div className="form-group">
                <label htmlFor="date" className="form-label">Date</label>
                <input type="date" name="date" id="date" className="form-input" placeholder="dd-mm-yy" value={date}  onChange={(e) => setDate(e.target.value)} required />
              </div>
            </div>
            <button type="submit" className="form-button">
              Find
            </button>
          </form>
        </div>
      </section>

      {
        Object.keys(stockDetails).length ?
        <StockTable ticker={stockDetails.ticker} data={stockDetails.results} /> :
        ""
      }
    </div>
  )
}
