const Thought = require('../models/Thought');

module.exports = {
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v');

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new though
  async createThought(req, res) {
    try {
      const dbthoughtData = await Thought.create(req.body);
      res.json(dbthoughtData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async updateThought (req,res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        {_id: req.params.thoughtId},
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res.status(404).json({
          message: `No thought with that Id`,
        });
      };

      res.json({message: 'thought successfully updated!'})

    } catch (err) {
      res.status(500).json(err);
    }
  },
  async deleteThought (req,res) {
    try {
      const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      res.json({ message: `thought deleted!`})
    } catch (err) {
      res.status(500).json(err);
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
