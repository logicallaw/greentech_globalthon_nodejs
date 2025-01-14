/*
 * This is file of the project logicallaw
 * Licensed under the MIT License.
 * Copyright (c) 2025 logicallaw
 * For full license text, see the LICENSE file in the root directory or at
 * https://opensource.org/license/mit
 * Author: logicallaw
 * Latest Updated Date: 2025-01-14
 */

exports.test = async (req, res, next) => {
  try {
    return res.status(200).json({message: 'Hello Test!'});
  } catch (error) {
    return res.status(500).json(
        {message: '연결에 실패하였습니다.', error: error.message});
  }
};