const routes = (app) => {
    app.route('/contract')
        .get((req, res, next) => {
            //middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, (req, res) => {
            res.send('GET request successful!')
        })

        .post((req, res) =>
            res.send('POST request successful!'))
    app.route('/contract/:contractID')
        .put((req, res) =>
        res.send('PUT request successful!'))

        .delete((req, res) =>
        res.send('DELETE request successful!'))
    app.route('/identifications/:searchValue')
        .put((req, res) => {
            const searchValue = req.params.searchValue;
            res.send('Hello ' + searchValue)
        })

}

module.exports =  routes;