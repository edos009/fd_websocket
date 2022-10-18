module.exports = {
  db: {
    development: {
      hostName: "localhost",
      port: 27017,
      dbName: "fd_chat",
    },
    production: {},
    text: {},
  },
  SOCKET_EVENTS: {
    NEW_MESSAGE: "NEW_MESSAGE",
    NEW_MESSAGE_ERROR: "NEW_MESSAGE_ERROR"
  }
};
