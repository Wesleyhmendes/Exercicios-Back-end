module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define('Account', {
    id: { 
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'Accounts',
    underscored: true,
  });

  Account.associate = (models) => {
    Account.hasOne(models.Profile,
      { foreignKey: 'id', as: 'profile' });

    Account.hasMany(models.Comments,
      { foreignKey: 'id', as: 'comments' });
  };

  return Account;
};