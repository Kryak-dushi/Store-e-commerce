const User = require('../models/user');

const createUser = (req, res) => {
    const user = new User(req.body);

    user
        .save()
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

const updateUser = (req, res) => {
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
    createUser,
    updateUser
}