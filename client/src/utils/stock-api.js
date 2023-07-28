import axios from "axios";
const baseUrl = "https://stock-tracker-server.vercel.app"

export const fetchStockData = async ({ticker, date}) => {
    let config = {
        method: 'post',
        url: `${baseUrl}/api/fetchStockData`,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : JSON.stringify({
            "ticker": ticker,
            "date": date
        })
      };
    const response = await axios.request(config);
    if (response.status >= 300) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }
  
    return response;
  };