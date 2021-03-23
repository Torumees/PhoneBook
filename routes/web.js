const express = require('express');
const contactsController = require('../controllers/contactsController');
const router = express.Router();

/// Routes
// home page
router.get('/', contactsController.getHomePage);

// // post new contact
router.get('/add-contact', contactsController.getFormPage);

// // post new contact
router.post('/add-contact', contactsController.postNewContact);

// // delete contact
router.post('/delete-contact', contactsController.deleteContact);

module.exports = router;