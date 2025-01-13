/*
 * This is file of the project logicallaw
 * Licensed under the MIT License.
 * Copyright (c) 2025 logicallaw
 * For full license text, see the LICENSE file in the root directory or at
 * https://opensource.org/license/mit
 * Author: logicallaw
 * Latest Updated Date: 2025-01-13
 */

// 1. Import modules
const dotenv = require('dotenv');

// Set environment variables
dotenv.config();

exports.home = async (req, res, next) => {
  try {
    const response = {
      title: 'Globalthon - main',
    };

    if (process.env.NODE_ENV == 'development') {
      response['notice'] = 'This is development server';
    } else if (process.env.NODE_ENV == 'test') {
      response['notice'] = 'This is test server';
    }

    res.render('main', response);
    return res.status(200);
  } catch (error) {
    return res.status(500).json({message: '잘못된 접근입니다.'});
  }
};