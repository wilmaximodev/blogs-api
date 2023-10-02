const CategoryModel = (sequelize, Datatypes) => {
  const Category = sequelize.define('Category', {
    id: {
      type: Datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: Datatypes.STRING,
  },
  {
    tableName: 'categories',
    timestamps: false,
    underscored: true,
  });

  return Category;
};

module.exports = CategoryModel;