FROM node:18.12
WORKDIR /app
COPY package.json .
RUN yarn
COPY . .
EXPOSE 5173
CMD ["yarn", "run", "dev"]