const express = require("express")
const app = express()
const fs = require("fs")
const path = require("path")

const router = require("./api/notes")
const PORT = process.env.PORT || 3001
app.use(express.json())
app.use(express.static('public'))
app.use("/api/", router)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"))
})
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"))
})
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})