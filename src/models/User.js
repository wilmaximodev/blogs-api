const UserModel = (sequelize, Datatypes) => {
  const User = sequelize.define('User', {
    id: {
      type: Datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    displayName: Datatypes.STRING,
    password: Datatypes.STRING,
    image: Datatypes.STRING,
    email: Datatypes.STRING,
  },
  {
    tableName: 'users',
    timestamps: false,
    underscored: true,
  });

  User.associate = ({ BlogPost }) => {
    User.hasMany(BlogPost,
      { foreignKey: 'userId', as: 'blogPosts' });
  }
  

  return User;
};

module.exports = UserModel;