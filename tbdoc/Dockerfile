FROM node:16-alpine

# Define variables
ARG APP_DIR="/home/node/app"

# Switch to the `node` user vs. root
USER node

# Install and run the app from the `node` user's home directory
RUN mkdir ${APP_DIR}
WORKDIR ${APP_DIR}

# Install Node packages
COPY package.json ${APP_DIR}
RUN npm install

# Copy and link Node.js package
COPY ./bin ${APP_DIR}/bin

# Switch to root temporarily to link the package to the global node_modules directory
USER root
RUN npm link
USER node

# Specify a mount point in the container that will be mapped to a directory
# on the host when the container is started.
VOLUME ${APP_DIR}/docs ${APP_DIR}/build

# Start markdown processor with default arguments
ENTRYPOINT ["tbdoc", "build"]
