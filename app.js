const express = require('express')
const app = express()
const PORT = 5000

// Static File
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/assets', express.static(__dirname + 'public/assets'))

// Initialize EJS (check guide at README.md)
app.set('views', './views')
app.set('view engine', 'ejs')

// Always do the params in order. req first, then res last.
app.get('', (req, res) => {
    // res.sendFile(__dirname + '/ui/index.html')

    // Instead of sending the file. use render (ejs)
    // text & text2 are variables that can be used inside the ejs file
    res.render('index', { 
        text: 'This is a sample text variable (templating engine)',
        text2: 'smooth'
    })
})

app.get('/about', (req, res) => {
    // text is a variable that can be used inside the ejs file
    res.render('about', {
        text: 'about page'
    })
})

app.get('/home', (req, res) => {
    // text is a variable that can be used inside the ejs file
    res.render('homepage', {
        text: 'home page'
    })
})

// Listen
app.listen(PORT, () => console.info(`Environment running at port: http://localhost:${PORT}`))