/*
 * This is file of the project High-Hackers
 * Licensed under the MIT License.
 * Copyright (c) 2025 High-Hackers
 * For full license text, see the LICENSE file in the root directory or at
 * https://opensource.org/license/mit
 * Author: logicallaw
 * Latest Updated Date: 2025-01-19
 */

const app = require('./app');

app.listen(app.get('port'), () => {
  console.log('[High-Hackers] Server is running at', app.get('port'), 'port!');
});