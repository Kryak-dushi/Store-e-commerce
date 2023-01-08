const Good = require('../models/good');

const getGoods = (req, res) => {
    Good
        .find({})
        .then((goods) => {
            res
                .status(200)
                .json(goods);
        })
        .catch((error) => {
            res.status(500)
                .json(error);
        })
}

const getGoodById = (req, res) => {
    Good
        .findById(req.params.id)
        .then((good) => {
            res
                .status(200)
                .json(good);
        })
        .catch((error) => {
            res.status(500)
                .json(error);
        })
}

const deleteGoodById = (req, res) => {
    Good
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

const createGood = (req, res) => {
    const good = new Good(req.body);

    good
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

const updateGoodById = (req, res) => {
    Good
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
    getGoods,
    getGoodById,
    deleteGoodById,
    createGood,
    updateGoodById
}