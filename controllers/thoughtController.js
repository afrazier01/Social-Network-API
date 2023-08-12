const User = require('../models/Thought');

module.exports = {
  async getThoughts(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleThought(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .select('-__v');

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new user
  async createThought(req, res) {
    try {
      const dbUserData = await User.create(req.body);
      res.json(dbUserData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async updateThought (req,res) {
    try {

    } catch (err) {

    }
  },
  async deleteThought (req,res) {
    try {

    } catch (err) {

    }
  },
  async createReaction (req,res) {
    try {

    } catch (err) {

    }
  },
  async deleteReaction (req,res) {
    try {

    } catch (err) {

    }
  },
};
