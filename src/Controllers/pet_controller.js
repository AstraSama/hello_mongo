const Pet = require("../Models/pet_model.js");

const store = (req, res) => {
    Pet.create(req.body);
    res.json();

}

const index = (req, res) => {
    const content = Pet.find().exec();
    res.json(content);

}

const show = (req, res) => {
    const content = Pet.findById(req.params.id).exec();
    res.json(content);

}

const update = (req, res) => {
    Pet.findByIdAndUpdate(req.params.id, req.body).exec();
    res.json();

}

const destroy = (req, res) => {
    Pet.findByIdAndRemove(req.params.id).exec();
    res.json();
    
}

module.exports = {
    store,
    index,
    show,
    update,
    destroy
}