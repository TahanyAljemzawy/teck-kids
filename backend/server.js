var express = require('express');
var morgan = require('morgan')
var cors = require('cors')
var app = express();


const path = require("path");
const jwt = require("jsonwebtoken");
var bodyParser = require("body-parser");
const server = require("http").createServer(app);
//the Routes
const authRoutes  = require('./routes/auth');
const courseRoute = require('./routes/courseRoute');
const teacherRoute=require('./routes/teacherRoute');
const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');
const userRoute   =require('./routes/userRoute')
const payments    = require('./routes/payments');
const materialsRouter = require('./routes/materials');
const chatroomRoute=require('./routes/chatroomRoute')
require('dotenv').config();
//middleware//
app.use(cors())
app.use(express.json()); 
app.use(morgan('dev'));
const mongoose = require('mongoose');
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true ,useFindAndModify:false}
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

//Bring in the models
require("./models/User");
require("./models/Chatroom");
require("./models/Massages");

// MIDDILWARES
app.use('/api',authRoutes);
app.use('/course',courseRoute);
app.use('/user',userRoute);
app.use('/teacher',teacherRoute);
app.use('/materials', materialsRouter);
app.use("/Chatroom",chatroomRoute)
app.use('/payments',payments);
app.use("/Chatroom",chatroomRoute);


const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
}); 


io.on('connect', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if(error) return callback(error);

    socket.join(user.room);

    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.`});
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    callback();
  });
  

 
  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });

    callback();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if(user) {
      io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
    }
  })
});
//
app.use("/Chatroom",chatroomRoute)
// // --> Add this
// if (process.env.NODE_ENV === 'production') {
//   // Serve any static files
//   app.use(express.static(path.join(__dirname, 'frontend/build')));
// // Handle React routing, return all requests to React app
//   app.get('*', function(req, res) {
//     res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
//   });
// }

//
//port with whatever the port will be given by heruko
const port = process.env.PORT || 8000;
server.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});