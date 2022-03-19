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
    Person.findOne({ food: food }, (err, data) => {
        done(err, data);
    });

};

const findPersonById = (personId, done) => {
    done(null /*, data*/ );
};

const findEditThenSave = (personId, done) => {
    const foodToAdd = "hamburger";

    done(null /*, data*/ );
};

const findAndUpdate = (personName, done) => {
    const ageToSet = 20;

    done(null /*, data*/ );
};

const removeById = (personId, done) => {
    done(null /*, data*/ );
};

const removeManyPeople = (done) => {
    const nameToRemove = "Mary";

    done(null /*, data*/ );
};

const queryChain = (done) => {
    const foodToSearch = "burrito";

    done(null /*, data*/ );
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