const mongoose = require('mongoose');
const Contact = mongoose.model('Contact');

// Render home Page
exports.getHomePage = (req, res) => {

    Contact.find((error, contacts) => {
        if (!error) {
            res.render('index.ejs', { contactItems: contacts });
        }
        else {
            console.log('Failed to retrieve data.');
        }
    });

};

// Render contact form Page
exports.getFormPage = (req, res) => {

    Contact.find((error, contacts) => {
        if (!error) {
            res.render('form.ejs');
        }
        else {
            console.log('Failed to retrieve data.');
        }
    });

};

// POST new Contact
exports.postNewContact = (req, res) => {
    let fieldFirst = req.body.newFirst;
    let fieldLast = req.body.newLast;
    let fieldPhone = req.body.newPhone;

    let newContact = new Contact();
    newContact.first_name = fieldFirst;
    newContact.last_name = fieldLast;
    newContact.phone_number = fieldPhone;

    newContact.save((error, response) => {
        if (!error) {
            res.redirect('/');
        }
        else {
            console.log("Failed to save data.");
        }
    })
}

// Delete Contact
exports.deleteContact = (req, res) => {
    const contactItemId = req.body.contactDelete;

    Contact.findByIdAndRemove(contactItemId, (error) => {
        if(!error){
            res.redirect('/');
        } else {
            console.log("Failed to remove an item.");
        }
    })
};