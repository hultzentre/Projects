FROM node:20

WORKDIR /home/hultzentre/proj/Projects/habit-tracker

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3030

CMD ["npm", "start"]
