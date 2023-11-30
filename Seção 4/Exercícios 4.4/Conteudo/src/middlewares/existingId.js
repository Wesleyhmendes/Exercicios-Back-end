const teams = require('../utils/teams');

const existingId = (req, res, next) => {
  const { id } = req.params;

  if (!teams.find((team) => team.id === Number(id))) {
    res.sendStatus.json({ message: 'Time não encontrado' });
  }
  next();
};

module.exports = existingId;
