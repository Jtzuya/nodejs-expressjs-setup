const express = require('express')
const app = express()
const PORT = 5000

// Static File
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/assets', express.static(__dirname + 'public/assets'))

// Always do the params in order. req first, then res last.
app.get('', (req, res) => {
    res.sendFile(__dirname + '/ui/index.html')
})

// Listen
app.listen(PORT, () => console.info(`Environment running at port: http://localhost:${PORT}`))