const path = require("path");
const http = require("http");
const express = require("express");
const socketIO = require("socket.io");

const publicPath = path.join(__dirname, "../public");
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

// Initialize the public directory
app.use(express.static(publicPath));

io.on("connection", (socket) => {
  console.log("New user connected");

  socket.emit("newMessage", {
    from: "Santeri",
    text: "Moro, kirjauduin just sisään...",
    createAt: 12
  });

  socket.on("createMessage", (newMessage) => {
    console.log("createMessage", newMessage)
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected")
  });
});

// Start the server on port specified below
server.listen(port, () => {
  console.log(`Listening on port: ${port}...`);
});
