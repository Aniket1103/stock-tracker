# Stock Tracker App

The Stock Tracker App is a Full Stack web application that allows users to search for stock details using the Polygon API. Users can search for a stock by providing a stock ticker and a specific date. The app retrieves and displays key details such as OPEN, HIGH, LOW, CLOSE, and VOLUME for the selected stock.

## How to Use

1. **Search for a Stock**: Enter the stock ticker (e.g., AAPL, FB, GOOG) in the input field.
2. **Select Date**: Choose a specific date for which you want to fetch the stock details.
3. **Get Stock Details**: Click the "Find" button to fetch and display more details about the selected stock for the chosen date.

## Technologies Used

- React: The front-end of the application is built using React, a popular JavaScript library for building user interfaces.
- Express.js: The back-end of the application is built using Express.js, a Node.js web application framework, to handle API requests and responses.
- Polygon API: The app uses the Polygon API to fetch stock data for the selected stock ticker and date.

## How It Works

1. The user enters a stock ticker (e.g., AAPL) in the input field.
2. The user selects a specific date using the date picker.
3. Upon clicking the "Find" button, the front-end sends a request to the Express.js server with the selected stock ticker and date.
4. The Express.js server makes an API call to the Polygon API to retrieve stock data for the provided ticker and date.
5. If the API call is successful, the server sends the relevant stock details back to the front-end.
6. The front-end displays the stock details, including OPEN, HIGH, LOW, CLOSE, and VOLUME, in a table format.
7. If there is an error during the API call or if the stock data is not available for the selected date, an appropriate error message will be displayed.

## Getting Started

To run the Stock Tracker App locally:

1. Clone the repository to your local machine.
2. Navigate to the `server` directory and install the required dependencies using `npm install`.
3. Start the Express.js server using `npm start`. The server will run on `http://localhost:5000`.
4. Navigate to the `client` directory and install the required dependencies using `npm install`.
5. Start the React development server using `npm start`. The client will run on `http://localhost:3000`.
6. Open your browser and go to `http://localhost:3000` to access the app.

## Future Improvements

- Add graphs to display stock performance over time, such as line charts or candlestick charts.
- Implement user authentication to allow personalized stock tracking.
- Add pagination or infinite scrolling for displaying large datasets of stock details.
- Enhance error handling to provide more informative error messages to users.

Feel free to contribute to the project and make it even better!
