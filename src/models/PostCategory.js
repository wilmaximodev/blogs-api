const PostCategoryModel = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, {
        timestamps: false,
        tableName: 'posts_categories',
        underscored: true,
    });

  PostCategory.associate = ({ Category, BlogPost }) => {
    BlogPost.belongsToMany(Category, {
      foreignKey: 'categoryId',
      otherKey: 'postId',
      as: 'categories',
      through: PostCategory, 
    });

    Category.belongsToMany(BlogPost, {
      foreignKey: 'postId',
      otherKey: 'categoryId',
      as: 'posts',
      through: PostCategory,
    });
  }

  return PostCategory;
};

module.exports = PostCategoryModel;