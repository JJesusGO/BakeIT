console.log(process.env.DATABASEUSER);

module.exports = {
  "development": {
    "username": process.env.DATABASEUSER,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.HOST,
    "port": process.env.PORT,
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.DATABASEUSER,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.HOST,
    "port": process.env.PORT,
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DATABASEUSER,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.HOST,
    "port": process.env.PORT,
    "dialect": "mysql"
  }
}
