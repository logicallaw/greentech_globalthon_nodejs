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
const express = require('express');

// 2. Import controllers
const {home, health} = require('../controllers/main');

// Define express router
const router = express.Router();

// GET /
router.get('/', home);

// GET /health
router.get('/health', health);

module.exports = router;