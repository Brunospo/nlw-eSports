FROM node:alpine

WORKDIR /api

COPY . ./

RUN npm install && npm run build

EXPOSE 3000

CMD ["npm", "start"]