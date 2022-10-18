const http = require("http");
const socketServer = require("socket.io");
const app = require("./app");
const { SOCKET_EVENTS } = require("./config");

const httpServer = http.createServer(app);
const io = socketServer(httpServer);

io.on("connection", (socket) => {
  console.log("Connection to socket");
  socket.on(SOCKET_EVENTS.NEW_MESSAGE, async (newMessage) => {
    console.log(newMessage);
    try {
      const savedMessage = await Message.create(newMessage);
      io.emit(SOCKET_EVENTS.NEW_MESSAGE, savedMessage);
    } catch (error) {
      socket.emit(SOCKET_EVENTS.NEW_MESSAGE_ERROR, error);
    }
  });
  socket.on("disconnect", (reason) => {
    console.log(reason);
  });
});

const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => {
  console.log(`Server started at ${PORT} port.`);
});
