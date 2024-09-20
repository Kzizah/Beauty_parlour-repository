# Use a newer official Node.js image
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy index.html to the working directory
COPY index.html .

# Copy js and css folders to the working directory
COPY js ./js
COPY css ./css

# Copy db.json to the working directory
COPY db.json .

# Copy middlewares.js to the working directory (if needed)
COPY middlewares.js .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the JSON server
CMD ["npx", "json-server", "--watch", "db.json", "--port", "3000", "--host", "0.0.0.0", "--static", ".", "--middlewares", "middlewares.js"]
