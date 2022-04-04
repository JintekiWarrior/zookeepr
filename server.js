const express = require('express')
const path = require("path")

const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')

const PORT = process.env.PORT || 3001
const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', apiRoutes)
app.use('/', htmlRoutes)
// middleware to make our public folders files static resources
app.use(express.static('public'))

// serves wildcard route 
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}`)
})