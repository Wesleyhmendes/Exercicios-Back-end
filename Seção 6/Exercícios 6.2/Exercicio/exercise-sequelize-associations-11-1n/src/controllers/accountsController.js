const service = require('../services/accountsService');

const errorMessage = { message: 'Algo deu errado!' };

const getAccountById = async (req, res) => {
  try {
    const { id } = req.params;
    const account = await service.getAccountById(id);

    if (!account) {
      return res.status(404).json({ message: 'Nenhuma conta cadastrada' });
    }

    return res.status(200).json(account);
  } catch (err) {
    console.log(err);
    res.status(500).json(errorMessage);
  }
};

const getAccountByIdLazy = async (req, res) => {
  try {
    const { id } = req.params;
    const account = await service.getAccountByIdLazy(id);

    if (!account) {
      return res.status(404).json({ message: 'Nenhuma conta cadastrada' });
    }

    return res.status(200).json(account);
  } catch (err) {
    console.log(err);
    res.status(500).json(errorMessage);
  }
};

const getCommentsByAccountId = async (req, res) => {
  try {
    const { id } = req.params;
    const listOfComments = await service.getCommentsByAccountId(id);

    if (!listOfComments.length) {
      return res.status(404).json({ message: 'Nenhum comentário cadastrado' });
    }

    return res.status(200).json(listOfComments);
  } catch (err) {
    console.log(err);
    res.status(500).json(errorMessage);
  }
};

const insertAccountAndProfile = async (req, res) => {
  try {
    const newAccount = req.body;
    const result = await service.saveAccountAndProfile(newAccount);

    if (!result) {
      return res.status(404).json({ message: 'Erro ao criar a conta' });
    }

    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json(errorMessage);
  }
};

const insertComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { message } = req.body;

    const result = await service.saveComment(message, id);

    if (!result) {
      return res.status(404).json({ message: 'Erro ao criar um comentário' });
    }

    return res.status(200).json({ message: 'Comentário cadastrado com sucesso' });
  } catch (err) {
    console.log(err);
    res.status(500).json(errorMessage);
  }
};

module.exports = {
  getAccountById,
  getAccountByIdLazy,
  getCommentsByAccountId,
  insertAccountAndProfile,
  insertComment,
};