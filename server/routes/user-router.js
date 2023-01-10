const express = require("express");
const User = require('../models/user');

const {
    createUser,
    updateUser,
    getUserById,
    getUserByEmail
} = require('../controllers/user-controller')

const router = express.Router();


router.post('/user', createUser);
router.get('/user/:id', getUserById);
router.post('/userlogin', getUserByEmail);
router.patch('/user/:id', updateUser);

module.exports = router;