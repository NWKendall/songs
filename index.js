console.log(`index.js running!`)

const express = require("express")

const server = express();
server.use(express.json())

server.get("/", (req, res) => {
  const songs = [ { id: 1, name: "Final countdown" }]
  res.status(200).json(songs)
})

// make port dynamic
const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server is working on port: 5000`))