module.exports = (req, res, next) => {
  const { rating } = req.body.rating;

  if (rating < 0 || rating > 5) {
    return res.status(400).json({ message: 'O campo rating deve ser um número entre 1 e 5' });
  }
  next();
};