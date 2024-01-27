FROM node:20

WORKDIR /home/trehultzen/proj/Projects/MERN/habit-tracker

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD["npm", "start"]
