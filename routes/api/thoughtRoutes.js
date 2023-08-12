const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require('../../controllers/thoughtController');

// /api/users
router.route('/').get(getThoughts).post(createThought).put(updateThought);

// /api/users/:userId
router.route('/:thoughtId').get(getSingleThought);

// /api/users/:userId
router.route('/:thoughtId/reactions').post(createReaction).delete(deleteReaction);

module.exports = router;