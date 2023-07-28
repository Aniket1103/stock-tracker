import React from 'react'

export default function StockTable({ ticker, data }) {
  console.log(ticker, data);
  const { o, h, l, c, v } = data;
  return (
    <div>
      <table className="stock-table">
      <thead>
        <tr>
          <th colSpan="2">Stock Data for Ticker {ticker}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Open</td>
          <td>{o}</td>
        </tr>
        <tr>
          <td>High</td>
          <td>{h}</td>
        </tr>
        <tr>
          <td>Low</td>
          <td>{l}</td>
        </tr>
        <tr>
          <td>Close</td>
          <td>{c}</td>
        </tr>
        <tr>
          <td>Volume</td>
          <td>{v}</td>
        </tr>
      </tbody>
    </table>
    </div>
  )
}
