//create server
const express = require('express')

//require router fom articles.js
const articleRouter = require('./routes/articles')
const app = express()

//use ejs for view engine:
app.set('view engine', 'ejs')

//use articleRouter
app.use('/articles', articleRouter)

// pass "articles" to the index page
app.get('/', (req, res) => {
    const articles = [{
            title: 'Test Article',
            createdAt: new Date(),
            description: 'Test description'
        },
        {
            title: 'Test Article 2',
            createdAt: new Date(),
            description: 'Test description 2'
        }
    ]
    res.render('index', { articles: articles })
})

// app will be on port 5000
app.listen(5000)