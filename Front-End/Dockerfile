FROM node:17

# Working dir
WORKDIR /usr/src/app

# Copy Package Json FIles
COPY package*.json ./

#Install Vite
RUN npm install vite -g

#Install Files
RUN npm install

#Copy Source FIles
COPY . .

# Build
RUN npm run start

#Expose the API port
EXPOSE 1337

CMD [ "node", "build/server.js" ]