FROM node:18

RUN apt-get update -y

# Create app directory
WORKDIR /usr/src/app
# copy all packages
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# RUN db migration command
RUN npx sequelize-cli db:migrate:undo:all
RUN npx sequelize-cli db:migrate
RUN npx sequelize-cli db:seed:all

EXPOSE 8080

CMD [ "npm", "start" ]