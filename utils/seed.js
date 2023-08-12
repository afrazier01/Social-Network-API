const connection = require('../config/connection');
const { User , Thought } = require('../models');

User
    .create({
        username: 'testUser01',
        email: 'testuser01@test.com',
    })
    .then(result => console.log('New user created!', result))
    .catch(err => console.log(err));
  