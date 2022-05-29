const http = require("http");
const socket = require('socket.io');

function Socket(express, app) {
  const server = http.createServer(app);
  const io = socket(server);

  io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    const _users = [];
    socket.on("trigger_user_update", () => {
      // check connected users
      for (let [id, socket] of io.of("/").sockets) {
        _users.push({
          userID: id,
          uuid: socket.handshake.auth.uuid,
          email: socket.handshake.auth.email
        });
      }
      io.of("/").emit("connected_users", _users);
      // console.log("check _users ===> ", _users)
    });

    socket.on("join_room", (data) => {
      // console.log(`User ${socket.id} is joining room ${data}`)
      socket.join(data);
    });

    socket.on("send_message", (data) => {
      // receive new message
      socket.to(data.to).emit("receive_message", data);
    });

    socket.on('disconnect', function(){
      // console.log(`User ${socket.id} is disconnected`);
      // remove user from connected list
      io.of("/").emit("connected_users", _users.filter(u => u.userID !== socket.id));
    });
  });

  server.listen(process.env.SOCKET_PORT || 3002, () => console.log(`Server has started.`));
}

module.exports = {
  Socket
}