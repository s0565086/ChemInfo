const express = require('express')
const app = express()
const port = 3000

app.get('/identifications/:searchValue', (req, res) => {
    const searchValue = req.params.searchValue;
    console.log({searchValue});
    res.send('Hello World! ' + searchValue)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})