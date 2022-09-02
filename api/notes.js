const fs = require("fs")
const path = require("path")
const router = require("express").Router()
var data = require("../db/db.json")
router.get("/notes", (req, res) => {
  res.send(data)
})
router.post("/notes", (req, res) => {
  data = data.sort(function (a, b) { return a.id - b.id })
  data.push({ id: data.length, title: req.body.title, text: req.body.text })
  fs.writeFileSync(path.join(process.cwd(), "db/db.json"), JSON.stringify(data))
  res.sendStatus(200)
})
module.exports = router