const mongoose = require('mongoose')

mongoose
.connect('mongodb+srv://matt:Zero123pup@cluster0.6pgcx.mongodb.net/test',{ useNewUrlParser: true})
.then(() => console.log('We are connected to Mongo....'))
.catch(err => console.log('Could not connect to mongoDb', err))
