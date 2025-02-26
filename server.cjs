const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = new socketIo.Server(3000, {
  cors: {
    origin: "http://localhost:5173", // Angular port
  },
});

// Настройка CORS
app.use(
  cors({
    origin: "http://localhost:5173/", // Укажите адрес вашего фронтенда
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

// Отправка HTML-клиента
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Обработка подключения клиента
io.on("connection", (socket) => {
  console.log("A user connected");

  // Обработка получения сообщения от клиента
  socket.on("message", (msg) => {
    console.log("Message from client: " + msg);
    // Отправка сообщения обратно клиенту
    socket.emit(
      "message",
      `Здравствуйте ваш вопрос: ${msg}. Этот чат настроен отвечать, таким образом, но вы можете связаться со мной в тг: https://t.me/GeorgiyBel`
    );
  });

  // Обработка отключения клиента
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});
