const express = require("express");
const User = require('../models/user');

const {
    createUser,
    updateUser
} = require('../controllers/user-controller')

const router = express.Router();

router.post('/user', createUser);
router.patch('/user/:id', updateUser);

module.exports = router;