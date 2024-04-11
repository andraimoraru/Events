const { User } = require("../Schemas/userSchema");

exports.fetchAllUsers = async () => {

  const result = await User.find();
  return result;
}

exports.addUser = async (newUser) => {

  const userToAdd = new User({...newUser});
  return userToAdd.save();
}

exports.fetchUserByEmail = async (email) => {
  const user = await User.find({email:`${email}`})
  return user;
}

