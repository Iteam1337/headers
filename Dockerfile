FROM node
ADD package.json /app/package.json
WORKDIR /app
RUN npm install --production
ADD . /app
ENV PORT=80
EXPOSE 80
CMD npm start