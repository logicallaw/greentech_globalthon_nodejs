/*
 * This is file of the project High-Hackers
 * Licensed under the MIT License.
 * Copyright (c) 2025 High-Hackers
 * For full license text, see the LICENSE file in the root directory or at
 * https://opensource.org/license/mit
 * Author: logicallaw
 * Latest Updated Date: 2025-01-19
 */

const {createLogger, format, transports} = require('winston');
const path = require('path');

const logger = createLogger({
  level: 'http',
  format: format.json(),
  transports: [
    new transports.File(
        {filename: path.join(__dirname, 'history', 'combined.log')}),
    new transports.File({
      filename: path.join(__dirname, 'history', 'error.log'),
      level: 'error'
    }),
  ],
});

if (process.env.NODE_ENV != 'production') {
  logger.add(new transports.Console({format: format.simple()}));
};

module.exports = logger;