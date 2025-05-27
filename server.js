const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const os = require("os");
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files from the "public" directory
app.use(express.static("public"));

const PORT = 3000;

// Socket.IO connection handling
io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  // Example of sending a welcome message to the connected client
  socket.emit("message", "Welcome to the server!");

  // Example of broadcasting to all clients when someone connects
  socket.broadcast.emit("message", "A new user joined");

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

function getLocalIP() {
  const interfaces = os.networkInterfaces();

  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      // Skip over internal (i.e. 127.0.0.1) and non-IPv4 addresses
      if (iface.family === "IPv4" && !iface.internal) {
        return iface.address;
      }
    }
  }

  return "127.0.0.1"; // fallback
}

// Start the server
server.listen(PORT, () => {
  console.log(
    `Server running on http://${getLocalIP()}:${PORT} \n(http://localhost:${PORT})`
  );
});
