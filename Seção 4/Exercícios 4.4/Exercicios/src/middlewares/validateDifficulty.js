module.exports = (req, res, next) => {
  const { difficulty } = req.body.dificuldade;

  const dificuldade = ['Fácil', 'Médio', 'Difícil'];

  if (difficulty.includes(dificuldade)) {
    return res.status(400)
    .json({ message: 'O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'' });
  }
  next();
};
