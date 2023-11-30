module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define('Comments', {
    id: { 
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    message: DataTypes.STRING,
    upvoting: DataTypes.INTEGER,
    downvoting: DataTypes.INTEGER,
    accountId: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    tableName: 'Comments',
    underscored: true,
  });

  Comments.associate = (models) => {
    Comments.belongsTo(models.Account,
      { foreignKey: 'accountId', as: 'account' });
  };

  return Comments;
};