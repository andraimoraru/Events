const { User } = require("../Schemas/userSchema");

exports.fetchAllUsers = async () => {

  const result = await User.find();
  return result;
}