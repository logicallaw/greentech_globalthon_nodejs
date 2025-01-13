/*
 * This is file of the project logicallaw
 * Licensed under the MIT License.
 * Copyright (c) 2025 logicallaw
 * For full license text, see the LICENSE file in the root directory or at
 * https://opensource.org/license/mit
 * Author: logicallaw
 * Latest Updated Date: 2025-01-13
 */

const Sequelize = require('sequelize');  // import sequelize
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config')[env];
const User = require('./user');
const Clothes = require('./clothes');

const db = {};

const sequelize =
    new Sequelize(config.database, config.username, config.password, {
      host: config.host,
      dialect: config.dialect,
      port: config.port,
      pool: config.pool,
      logging: config.logging,
      dialectOptions: config.dialectOptions,
    });

sequelize.authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch((error) => {
      console.error('Unable to connect to the database: ', error);
    });

db.sequelize = sequelize;

db.User = User;
db.Clothes = Clothes;

User.init(sequelize);
Clothes.init(sequelize);

module.exports = db;