const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addAFriend,
  removeAFriend,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser).put(updateUser).delete(deleteUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser);

// /api/users/:userId
router.route('/:userId/friends/:friendId').post(addAFriend).delete(removeAFriend);

module.exports = router;
