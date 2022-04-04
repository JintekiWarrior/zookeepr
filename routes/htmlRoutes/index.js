const path = require("path")
const router = require("express").Router()

// serves the index.html route
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'))
})

// serves the animals.html route 
router.get('/animals', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/animals.html'))
})

// serves the zookeepers.html
router.get('/zookeepers', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/zookeepers.html'))
})

module.exports = router