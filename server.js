const express = require('express')
const app = express()

// Use Angular
app.use(express.static( __dirname + '/client/dist/client' ));

require('./server/routes.js') (app)

app.listen(8000, function() {
    console.log("listening on port 8000");
})