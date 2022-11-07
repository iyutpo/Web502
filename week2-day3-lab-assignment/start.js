require('dotenv').config();
require('./models/Registration');
const app = require('./app');
const mongoose = require('mongoose');


mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection
    .on('open', () => {
        console.log('Mongoose connection open')
    }).on('error', (err) => {
        console.log(`Connection error: ${err.message}`)
    });


const server = app.listen(3000, () => {
    console.log(`Express is running on port ${server.address().port}`);
})




