FROM node:8.12.0

ENV NPM_CONFIG_LOGLEVEL warn

COPY . .

RUN npm run build --develop

RUN npm install -g serve

CMD serve -s build

EXPOSE 5000:5000
