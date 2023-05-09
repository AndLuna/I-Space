module.exports = (sequelize, DataType) => {
    const User = sequelize.define('User', {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: DataType.STRING(100),
      email: DataType.STRING(100),
      pwd: DataType.STRING(100)
    }, {
      tableName: 'user',
      timestamps: false
    })
    return User
  }