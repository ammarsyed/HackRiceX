const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Routes = require('./routes.js');


const app = express();
const PORT = process.env.PORT || 5000;

//allow db to receive input data
app.use(cors());
app.use(bodyParser.json());

//connecting to atlas:
const uri = 'mongodb+srv://admin:pass1234@cluster0.hhfak.mongodb.net/covid-companion?retryWrites=true&w=majority';
mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.once('open', function() {
    console.log("Mongo Atlas Connected");
})

//connecting to route file
app.use('/', Routes);

//heroku routing
if (process.env.NODE_ENV === 'production') {
    app.use(express.static( 'client/build' ));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


//output port num
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
