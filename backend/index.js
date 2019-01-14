const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 4000;
const bodyParser = require('body-parser');
const mainRoutes = require('./api/routes/main');


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', mainRoutes);

app.use((req, res, next) => {
    const error = new Error('not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});


app.listen(port, () => {
    console.log('listening on port ' + port )
});
