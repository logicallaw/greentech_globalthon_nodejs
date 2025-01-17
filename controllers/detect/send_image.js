/*
 * This is file of the project logicallaw
 * Licensed under the MIT License.
 * Copyright (c) 2025 logicallaw
 * For full license text, see the LICENSE file in the root directory or at
 * https://opensource.org/license/mit
 * Author: logicallaw
 * Latest Updated Date: 2025-01-18
 */

// 1. Import modules
const axios = require('axios');
const dotenv = require('dotenv');

// Set environment variables
dotenv.config();

exports.send_image = async (req, res, next) => {
  const flask_url = process.env.FLASK_URL;

  if (!flask_url) {
    return res.status(500).json(
        {message: 'Internal server error! Missing FLASK_URL.'});
  }

  const {base64Image} = req.body;

  if (!base64Image) {
    return res.status(400).json({message: 'Required base64Image'});
  }

  const json_payload = {base64Image};

  try {
    const response = await axios.post(flask_url, json_payload);

    if (!response.data || !response.data.probability) {
      return res.status(500).json(
          {message: 'Required probability not found in response'});
    }

    const {probability} = response.data;

    return res.status(200).json({
      message: 'Success to send image!',
      probability,
    });
  } catch (error) {
    console.error('Error communicating with Flask server:', error.message);
    return res.status(500).json({
      message: 'Failed to connect to Flask server or invalid response',
      error: error.message,
    });
  }
};