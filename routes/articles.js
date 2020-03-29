const express = require('express')
const router = express.Router()

//if you go to http://localhost:5000/articles you will see
//'In articles' text

router.get('/', (req, res) => {
    res.send('In articles')
})

// export the routes on this file
module.exports = router