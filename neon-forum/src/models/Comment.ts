export const Comment = sequelize.define("Comment", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  body: { type: DataTypes.STRING, allowNull: false },
  createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
});
Post.hasMany(Comment, { foreignKey: "postId" });
User.hasMany(Comment, { foreignKey: "authorId" });
Comment.belongsTo(Post);
Comment.belongsTo(User, { as: "author" });
