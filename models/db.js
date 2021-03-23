const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/ContactsDB', { useNewUrlParser: true, useUnifiedTopology: true } );
require('./contact');