/*
 * This is file of the project logicallaw
 * Licensed under the MIT License.
 * Copyright (c) 2025 logicallaw
 * For full license text, see the LICENSE file in the root directory or at
 * https://opensource.org/license/mit
 * Author: logicallaw
 * Latest Updated Date: 2025-01-13
 */

const app = require('./app');

app.listen(app.get('port'), () => {
  console.log('[Globalthon] Server is running at', app.get('port'), 'port!');
});