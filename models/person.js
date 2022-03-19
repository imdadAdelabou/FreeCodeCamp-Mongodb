const mongoose = require('mongoose');

const personSchema = mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number },
    favoriteFoods: { type: [String] },
});

const Person = mongoose.model('Person', personSchema);
module.exports = Person;