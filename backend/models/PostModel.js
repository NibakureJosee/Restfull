import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db.js';

class Post extends Model {}

Post.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Post',
  }
);

export default Post;
