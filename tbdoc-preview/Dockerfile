FROM node:16-alpine

# Define variables
ARG GIT_ORG="frankhinek"
ARG GIT_REPO="temp-dev-site"
ARG GIT_BRANCH="main"
ARG GIT_URL="https://github.com/${GIT_ORG}/${GIT_REPO}/archive/refs/heads/${GIT_BRANCH}.zip"
ARG APP_DIR="/home/node/app"

# Switch to the `node` user vs. root
USER node

# Install and run the app from the `node` user's home directory
RUN mkdir ${APP_DIR}
WORKDIR ${APP_DIR}

# Download and install the latest version of the developer site
RUN wget --no-check-certificate -O ${GIT_BRANCH}.zip ${GIT_URL} \
  && unzip ${GIT_BRANCH}.zip \
  && mv ${GIT_REPO}-${GIT_BRANCH}/* ${GIT_REPO}-${GIT_BRANCH}/.[!.]* ${APP_DIR} \
  && rm -r ${GIT_REPO}-${GIT_BRANCH} \
  && rm ${GIT_BRANCH}.zip

# Install Node packages
RUN npm install

# Specify a mount point in the container that will be mapped to a directory
# on the host when the container is started.
VOLUME ${APP_DIR}/docs

# Expose port 3000
EXPOSE 3000

# Start Docusaurus in develop mode to enable live reloading
ENTRYPOINT ["npx", "docusaurus", "start", "--host", "0.0.0.0"]
