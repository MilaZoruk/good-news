const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class NewsSave extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.User, { through: models.Connect, foreignKey: 'newsId' });
    }
  }
  NewsSave.init({
    title: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    newsUrl: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'NewsSave',
  });
  return NewsSave;
};
