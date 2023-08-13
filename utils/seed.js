const connection = require('../config/connection');
const { User , Thought } = require('../models');

User
    .create({
        username: 'testUser01',
        email: 'testuser01@test.com',
    })
    .then(result => console.log(`New user created!` , result))
    .catch(err => console.log(err));

User
    .create({
        username: 'testUser02',
        email: 'testuser2@test.com',
    })
    .then(result => console.log('New user created!', result))
    .catch(err => console.log(err));

User
    .create({
        username: 'IamThaBest033',
        email: 'bestuser4ever@mail.com',
    })
    .then(result => console.log('New user created!', result))
    .catch(err => console.log(err));
  
User
    .create({
        username: 'Rugrats00',
        email: 'candyland@umail.com',
    })
    .then(result => console.log('New user created!', result))
    .catch(err => console.log(err));

User
    .create({
        username: 'Greatest2EverDoIt',
        email: 'greatest@vmail.com',
    })
    .then(result => console.log('New user created!', result))
    .catch(err => console.log(err));

Thought
    .create({
        thoughtText: 'Hello world. This is my first thought',
        username: 'testUser01',
    })
    .then(result => console.log('New thought created!', result))
    .catch(err => console.log(err));

Thought
    .create({
        thoughtText: 'Test text 002',
        username: 'Rugrats00',
    })
    .then(result => console.log('New thought created!', result))
    .catch(err => console.log(err));

Thought
    .create({
        thoughtText: 'I like green apples better than red ones',
        username: 'Greatest2EverDoIt',
    })
    .then(result => console.log('New thought created!', result))
    .catch(err => console.log(err));