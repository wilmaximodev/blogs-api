const BlogPostModel = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
     allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
        reference: {
          model: 'User',
          key: 'id',
        },
      },
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
    }, {
        timestamps: false,
        tableName: 'blog_posts',
        underscored: true,
    });

    BlogPost.associate = ({ User }) => {
        BlogPost.belongsTo(User, {
            foreignKey: 'userId',
            as: 'user',
        });
    };
    return BlogPost;
}

module.exports = BlogPostModel;