# Zomato Restaurant Listing & Searching

This project is a restaurant listing and searching application built using the MERN (MongoDB, Express.js, React, Node.js) stack.

## Table of Contents

- [Features](#features)
- [Setup](#setup)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Real-time food ordering system.
- Search and filter restaurants by various criteria.
- Display detailed restaurant and menu information.

### Key Use Cases

- **Data Loading:**

  - A script to load Zomato restaurant data into the database.

- **Web API Service:**

  - **Get Restaurant by ID:** Retrieve details of a specific restaurant by its ID.
  - **Get List of Restaurants:** Fetch a list of restaurants with pagination support.

- **User Interface:**
  - **Restaurant List Page:** Display a list of restaurants with navigation to the restaurant's detail page.
  - **Restaurant Detail Page:** Show details of a specific restaurant.
  - **Location Search:** Search restaurants within a specified latitude and longitude range.
  - **Image Search:** Upload an image to search for restaurants offering similar cuisines.

### Additional Use Cases (Optional)

- **Filtering Options:**

  - By Country
  - By Average Spend for Two People
  - By Cuisines

- **Search Functionality:**
  - Search for restaurants by name and description.


## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/e42-typeface-ai/iiits-gauravbhaskar080.git
   ```

2. **Install dependencies:**

   Navigate to the project directory and run:

   ```bash
   cd Chat-App

   cd client
   npm install
   cd server
   npm install
   ```

3. **Set up MongoDB:**

   - Create a `.env` file in the root directory and add your MongoDB URL:

     ```
     MONGODB_URI = 'your_mongo_db_url'
     ```

## Usage

1. **Start the server:**

   In a new terminal window, navigate to the `server` directory and run:

   ```bash
   cd server
   npm start
   ```

   The server will start at `http://localhost:5000`.

2. **Start the client:**

   In a new terminal window, navigate to the `client` directory and run:

   ```bash
   cd client
   npm start
   ```

   The client will start at `http://localhost:3000`.

3. **Access the website:**

   Open a web browser and go to `http://localhost:3000`.

## File Structure

- `client/`: Contains the React frontend.
  - `public/`: Holds static files like CSS, images, and JavaScript.
  - `src/`: Contains the main source code.
    - `api/` : All api to fetch data from backend
    - `components/`: React components used in the application.
    - `pages/`: Different pages of the application.
    - `styles/`: Different page styles of the application.
    - `App.js`: The main application component.
    - `index.js`: Entry point of the React application.
- `server/`: Contains the Node.js backend.
  - `config/`: Configuration files.
  - `controllers/`: Controllers for handling routes and data.
  - `Data/`: Sample data for initial setup.
  - `models/`: Mongoose models for MongoDB.
  - `routes/`: Express.js route handlers.
  - `scripts/`: For Loading csv and Excel file data in mongodb.
  - `index.js`: Entry point of the Node.js application.
  - `.env`: Configuration file for environment variables.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your forked repository.
5. Create a pull request to the original repository.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code for your own purposes.

---
