# Use the standard nodejs image as a base
FROM dockerfile/nodejs

# Install production dependencies.
ADD package.json /app/package.json
ADD app /app/app
ADD server /app/server
ADD Gruntfile.js /app/Gruntfile.js
ADD bower.json /app/bower.json
RUN cd /app && npm install
RUN cd /app && npm install -g grunt-cli
RUN cd /app && npm install -g bower
RUN cd /app && bower update --allow-root
RUN cd /app && grunt build

# Set working directory for the app:
WORKDIR /app

# Expose the correct port for your app. This will be picked up by "Katalog" who
# will make sure Nginx redirects to this port. 
EXPOSE 9000

CMD node /app/server/server.js
