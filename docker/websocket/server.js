const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: "*" } });

app.use(express.static(__dirname)); // Phục vụ file HTML

io.on("connection", (socket) => {
    console.log("Client kết nối:", socket.id);

    socket.on("chatMessage", (data) => {
        socket.broadcast.emit("chatMessage", data); // Gửi cho tất cả client khác
    });

    socket.on("typing", () => {
        socket.broadcast.emit("typing");
    });

    socket.on("disconnect", () => {
        console.log("Client ngắt kết nối:", socket.id);
    });
});

server.listen(3000, () => {
    console.log("🚀 WebSocket Chat Server đang chạy trên http://localhost:3000/");
});
