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
# RUN npm run start

#Expose the API port
EXPOSE 5173

# CMD [ "node", "build/server.js" ]
# CMD [ "npm", "start" ]
# CMD [ "npm", "run", "dev"]
CMD [ "npm", "run", "dev", "-- --host 0.0.0.0" ]