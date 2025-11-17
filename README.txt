1. first Configure your MONGODB database and import databse from mongo_backup folder via:
mongorestore --uri="mongodb+srv://your_mongodb_username:<YOUR_PASSWORD>@cluster0.wqsdtza.mongodb.net/" --db="movie_api_db" "mongo_backup\movie_api_db"
2. Build and run back end.
3. run ngrok on cmd terminal:
ngrok http 8080
4. open front end folder, install dependencies and run:
npm install
npm start
