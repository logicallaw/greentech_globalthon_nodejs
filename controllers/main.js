/*
 * This is file of the project High-Hackers
 * Licensed under the MIT License.
 * Copyright (c) 2025 High-Hackers
 * For full license text, see the LICENSE file in the root directory or at
 * https://opensource.org/license/mit
 * Author: logicallaw
 * Latest Updated Date: 2025-01-19
 */

// 1. Import custom modules
const {home} = require('./main/home');
const {health} = require('./main/health');

const main = {};
main.home = home;
main.health = health;

module.exports = main;