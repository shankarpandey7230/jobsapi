const register = async (req, res) => {
  res.send("registeruser");
};

const login = async (req, res) => {
  res.send("login user  ");
};

module.exports = {
  register,
  login,
};
