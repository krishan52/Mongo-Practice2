const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
}

let allChats = [
    {
      from: "neha",
      to: "priya",
      message: "hello, how are you",
      created_at: new Date(),
    },
    {
      from: "rohit",
      to: "priya",
      message: "kitni roti bnau",
      created_at: new Date(),
    },{
      from: "mohan",
      to: "sohan",
      message: "daru piyega",
      created_at: new Date(),
    },
    {
      from: "lalit",
      to: "sonu",
      message: "Ghumne chale",
      created_at: new Date(),
    }
  ];

Chat.insertMany(allChats);


