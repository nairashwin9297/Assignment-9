const bcrypt = require('bcrypt');
const User = require('../models/User');

async function findUserByEmail(email) {
  return User.findOne({ email });
}

async function authenticateUser(email, password) {
  const user = await findUserByEmail(email);
  // console.log(user)

  if (!user) {
    throw new Error('No user found');
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    throw new Error('Invalid Password!');
  }

  return { email: user.email, fullName: user.fullName };
}

module.exports = {
  authenticateUser,
};
