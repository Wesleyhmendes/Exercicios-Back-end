const { Account, Profile, Comments } = require('../models');

const getAccountById = async (id) => {
  const account = await Account.findOne({
    where: { id },
    include: [{ model: Profile, as: 'profile' }],
  });

  return account;
};

const getAccountByIdLazy = async (id) => {
  const account = await Account.findOne({
    where: { id },
  });

  return account;
};

const getCommentsByAccountId = async (id) => {
  const listOfComments = await Comments.findOne({
    where: { accountId: id },
  });

  return listOfComments;
};

const saveAccount = async (email, password) => {
  if (!email || !password) {
    return ({ message: 'Verifique se todos os campos foram preenchidos da forma correta!' });
  }

  try {
    return Account.create({ email, password });
  } catch (error) {
    return ({ message: 'Erro ao cadastrar uma conta!' });
  }
};

const validateProfileFields = (firstName, lastName, phone, accountId) => {
  if (!firstName || !lastName || !phone || !accountId) {
    return ({ message: 'Verifique se todos os campos foram preenchidos da forma correta!' });
  }
};

const saveProfile = async (firstName, lastName, phone, accountId) => {
  const invalidFieldsError = validateProfileFields(firstName, lastName, phone, accountId);

  if (invalidFieldsError) return invalidFieldsError;

  try {
    return Profile.create(
      { firstName, lastName, phone, accountId },
    );
  } catch (error) {
    return false;
  }
};

const saveAccountAndProfile = async ({ email, password, firstName, lastName, phone }) => {
  const account = await saveAccount(email, password);

  if (account.message) {
    return account;
  }

  const profile = await saveProfile(firstName, lastName, phone, account.id);

  return profile;
};

const saveComment = async (message, accountId) => {
  const comment = await Comments.create(
    { message, upvoting: 0, downvoting: 0, accountId },
  );
    return comment;
};

module.exports = {
  getAccountById,
  getAccountByIdLazy,
  getCommentsByAccountId,
  saveAccountAndProfile,
  saveComment,
};
