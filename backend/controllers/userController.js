const userService = require('../services/userServices');

async function loginUser(req, res) {
  const { email, password } = req.body;
  console.log(email,password,'CRED')

  try {
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const user = await userService.authenticateUser(email, password);

    res.json({ message: 'Login successful', user });
  } catch (error) {
    console.error(error.message,"IIIII");
    res.status(401).json({ message: error.message });
  }
}

module.exports = {
  loginUser,
};
