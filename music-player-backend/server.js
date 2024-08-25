const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// MongoDB connection (Replace with your MongoDB connection string)
mongoose.connect("mongodb://localhost/music-player", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
const searchRoute = require("./routes/search");
const playlistsRoute = require("./routes/playlists");
const songsRoute = require("./routes/songs");

app.use("/api/search", searchRoute);
app.use("/api/playlists", playlistsRoute);
app.use("/api/songs", songsRoute);

app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});
