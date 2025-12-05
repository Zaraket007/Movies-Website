A full-stack web application that allows users to browse a collection of movies, watch trailers, and post/view reviews. The application is built using a Spring Boot backend with MongoDB for data persistence and a React frontend for the user interface.

🚀 Features
Movie Showcase: Display a rotating carousel of featured movies with high-quality posters and backdrops.

Trailer Integration: Watch movie trailers directly within the app (via YouTube integration).

Review System: Users can write and submit reviews for specific movies.

Real-time Updates: Reviews are instantly saved to the database and associated with the specific movie record.

Responsive Design: Built with React Bootstrap and Material UI to ensure compatibility across devices.

🛠️ Tech Stack
Backend
Language: Java

Framework: Spring Boot (Web, Data MongoDB)

Database: MongoDB

Tools: Lombok (for boilerplate reduction), Maven

Frontend
Library: React.js

Routing: React Router DOM

HTTP Client: Axios

UI Components: * React Bootstrap

Material UI (Carousel)

FontAwesome (Icons)

Media: React Player (for handling YouTube video playback)

📂 Project Structure
Backend Architecture
The backend follows a standard Service-Repository-Controller pattern:

Controller Layer: Handles HTTP requests (MovieController, ReviewController).

Service Layer: Contains business logic (MovieService, ReviewService).

Repository Layer: Interacts with MongoDB (MovieRepository, ReviewRepository).

Models: Defines the data structure for Movie and Review. Uses @DocumentReference to link reviews to movies.

Database Schema
Movies Collection: Stores movie metadata (IMDB ID, title, genres, poster, backdrops) and a list of references to review IDs.

Reviews Collection: Stores the body of the review and its unique ID.

🔌 API Endpoints
The backend exposes the following RESTful endpoints via http://localhost:8080/api/v1:

Method	Endpoint	Description
GET	/movies	Retrieve a list of all movies.
GET	/movies/{imdbId}	Retrieve a single movie by its IMDB ID.
POST	/reviews	Create a new review for a movie.

Export to Sheets

Sample POST Payload for Reviews:

JSON

{
    "reviewBody": "This movie was fantastic!",
    "imdbId": "tt1234567"
}
⚙️ Setup & Installation
Prerequisites
Java Development Kit (JDK) 17 or later

Node.js and npm

MongoDB (running locally or via Atlas)

1. Database Configuration
Ensure your MongoDB instance is running. Configure your Spring Boot application.properties (usually located in src/main/resources) with your database URI:

Properties

spring.data.mongodb.uri=mongodb+srv://<username>:<password>@cluster.mongodb.net/movie-api-db
spring.data.mongodb.database=movie-api-db
2. Backend Setup
Navigate to the backend project directory.

Install dependencies and build the project:

Bash

./mvnw clean install
Run the application:

Bash

./mvnw spring-boot:run
The backend will start on port 8080.

3. Frontend Setup
Navigate to the frontend directory (where package.json is located).

Install dependencies:

Bash

npm install
Start the React development server:

Bash

npm start
The frontend will launch on http://localhost:3000.

📸 Usage
Home Page: Upon loading, you will see a carousel of movies.

View Trailer: Click the "Play" button (Gold Play Icon) on a movie slide to open the trailer player.

Reviews: Click the "Reviews" button to navigate to the reviews page for that specific movie.

Add Review: Type your review in the text area and click "Submit". The review will be appended to the list below.

📝 License
This project is open-source and available for educational purposes.
