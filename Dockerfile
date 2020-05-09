# STAGE 1 - BUILD
# ===============
FROM node:13 as build-deps

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn install --production

# Coying the app
COPY . .

# Building the app
RUN yarn build

# Running the app
CMD [ "npm", "start" ]



# STAGE 2 - PROD ENV
# ==================
FROM nginx:1.12-alpine

COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html

COPY --from=build-deps /usr/src/app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
