module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define(
    "Student",
    {
      name: DataTypes.STRING,
      age: DataTypes.INTEGER,
      gender: DataTypes.STRING,
    },
    {
      freezeTableName: true,
    }
  );
  return Student;
};
