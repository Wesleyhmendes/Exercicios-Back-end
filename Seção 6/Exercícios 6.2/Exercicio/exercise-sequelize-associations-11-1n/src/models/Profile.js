module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    id: { 
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phone: DataTypes.STRING,
    accountId: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    tableName: 'Profiles',
    underscored: true,
  });

  Profile.associate = (models) => {
    Profile.belongsTo(models.Account,
      { foreignKey: 'accountId', as: 'account' });
  };

  return Profile;
};