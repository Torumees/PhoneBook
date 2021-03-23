const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    phone_number: {
        type: String
    }
});
mongoose.model('Contact', contactSchema);