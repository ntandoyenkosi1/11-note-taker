const fs = require("fs")
const path = require("path")
const router = require("express").Router()

router.get("/notes", (req, res) => {
  let data = fs.readFileSync(path.join(process.cwd()+"/db/db.json"), {encoding:"utf8"})
  res.send(data)
})
router.post("/notes", (req, res) => {
  let data = require("../db/db.json")
  data = data.sort(function (a, b) { return a.id - b.id })
  data.push({ id: data.length, title: req.body.title, text: req.body.text })
  fs.writeFileSync(path.join(process.cwd(), "db/db.json"), JSON.stringify(data))
  res.sendStatus(200)
})
router.delete("/notes/:id", (req, res) => {
  const {id}=req.params
  let data = require("../db/db.json")
  data = data.filter(x=>x.id!=id)
  fs.writeFileSync(path.join(process.cwd(), "db/db.json"), JSON.stringify(data))
  res.sendStatus(200)
})
module.exports = router