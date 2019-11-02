const express = require('express')
const app = express()
const bcrypt = require('bcrypt')

const users = []

app.set('view-engine', 'ejs')
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.render('index.ejs', { name: 'Kyle' })
})

app.get('/login', (req, res) => {
    res.render('login.ejs', { name: 'Kyle' })
})

app.post('/login', (req, res) => {

})

app.get('/register', (req, res) => {
    res.render('register.ejs', { name: 'Kyle' })
})

app.post('/register', (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id:Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        res.redirect('/login')
    } catch (error) {

    }
    req.body.email
})

app.listen(3000)