FROM node:20-alpine

COPY . ./app

WORKDIR ./app

ENV TZ="Europe/Madrid"

RUN npm install --save

CMD ["npm", "run", "generate_extension"]
