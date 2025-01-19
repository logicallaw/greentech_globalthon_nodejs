/*
 * This is file of the project High-Hackers
 * Licensed under the MIT License.
 * Copyright (c) 2025 High-Hackers
 * For full license text, see the LICENSE file in the root directory or at
 * https://opensource.org/license/mit
 * Author: logicallaw
 * Latest Updated Date: 2025-01-19
 */

const express = require('express');

const {send_image} = require('../controllers/detect');

const router = express.Router();

// POST /detect/send_image
router.post('/send_image', send_image);

module.exports = router;