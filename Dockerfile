# This is file of the project logicallaw
# Licensed under the MIT License.
# Copyright (c) 2025 logicallaw
# For full license text, see the LICENSE file in the root directory or at
# https://opensource.org/license/mit
# Author: logicallaw
# Latest Updated Date: 2025-01-15

# Fix Node.js Image Version
FROM node:23.6.0

# Set working directory
WORKDIR /greentech_globalthon_nodejs/

# Environment variables
ENV NODE_ENV=production

# Copy only package.json and lock files for npm cache optimization
COPY ./package.json /greentech_globalthon_nodejs/
COPY ./package-lock.json /greentech_globalthon_nodejs/

# Install System Packages (Minimum Installation)
RUN apt-get update && apt-get install -y --no-install-recommends vim \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Install Dependencies
RUN npm install --only=production

# Copy application code
COPY . /greentech_globalthon_nodejs/

# Container Port Number
EXPOSE 3000

# Automatically execute the following commands when the container is executed
CMD ["npm", "run", "prod"]