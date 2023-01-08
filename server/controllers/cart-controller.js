const User = require('../models/user');

const getCartById = (req, res) => {
    User
        .findById(req.params.id)
        .then((user) => {
            res
                .status(200)
                .json(user.cart);
        })
        .catch((error) => {
            res.status(500)
                .json(error);
        })
}

const emptyCartById = (req, res) => {
    User
        .findByIdAndDelete(req.params.id)
        .then((result) => {
            res
                .status(200)
                .json(result);
        })
        .catch((error) => {
            res.status(500)
                .json(error);
        })
}

const updateCartById = (req, res) => {
    User
        .findByIdAndUpdate(req.params.id, req.body)
        .then((result) => {
            res
                .status(200)
                .json(result);
        })
        .catch((error) => {
            res.status(500)
                .json(error);
        })
}

module.exports = {
    getCartById,
    emptyCartById,
    updateCartById
}