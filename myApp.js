require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
let Person = require('./models/person.js');

const createAndSavePerson = (done) => {
    let document = new Person({ name: 'Imdad', age: 19, favoriteFoods: ['Rice', 'Hamburger'] });
    document.save((err, data) => {
        done(err, data);
    });
};

const createManyPeople = (arrayOfPeople, done) => {
    Person.create(arrayOfPeople, (err, data) => {
        done(err, data);
    });
};

const findPeopleByName = (personName, done) => {
    Person.find({ name: personName }, (err, data) => {
        done(err, data);
    });
};

const findOneByFood = (food, done) => {
    Person.findOne({ favoriteFoods: food }, (err, data) => {
        done(err, data);
    });
};

const findPersonById = (personId, done) => {
    Person.findById({ _id: personId }, (err, data) => {
        done(err, data);
    });
};

const findEditThenSave = (personId, done) => {
    const foodToAdd = "hamburger";
    Person.findById({ _id: personId }, (err, data) => {
        data['favoriteFoods'].push(foodToAdd);
        data.save((err, data) => {
            done(err, data);
        });
    })

};

const findAndUpdate = (personName, done) => {
    const ageToSet = 20;


    Person.findOneAndUpdate({ name: personName }, { age: 20 }, { new: true }, (err, data) => {
        done(err, data);
    });
};

const removeById = (personId, done) => {
    Person.findByIdAndRemove({ _id: personId }, (err, data) => {
        done(null, data);
    });
};

const removeManyPeople = (done) => {
    const nameToRemove = "Mary";

    Person.remove({ name: nameToRemove }, (err, data) => {
        done(err, data);
    });

};

const queryChain = (done) => {
    const foodToSearch = "burrito";

    Person.find({ favoriteFoods: foodToSearch }).sort({ name: 1 }).limit(2).select(['name', 'favoriteFoods']).exec((err, data) => {
        done(err, data);
    });

};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;