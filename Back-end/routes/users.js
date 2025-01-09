const express = require("express");
const userRoutes = express.Router();
const {getUsers, getUser,postUsers,putUser,patchUser,deleteUser} = require("../controllers/users");


userRoutes.route('/').get(getUsers)
userRoutes.route('/:id').get(getUser)
userRoutes.route('/').post(postUsers)
userRoutes.route('/:id').put(putUser)
userRoutes.route('/:id').patch(patchUser)
userRoutes.route('/:id').delete(deleteUser)


module.exports = userRoutes