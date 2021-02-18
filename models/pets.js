module.exports = (sequelize, DataTypes) => {
  const Pet = sequelize.define(
    "Pet",
    {
      name: DataTypes.STRING,
      age: DataTypes.INTEGER,
      weight: DataTypes.STRING,
      color: DataTypes.STRING,
    },
    {
      freezeTableName: true,
    }
  );
  return Pet;
};
