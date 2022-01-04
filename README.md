# Gameday_Savers
Project 3 Full Stack Development

*** NOTICE ***
After Cloning the files, 
- "npm install" on the main root directory
- "npm install" in the client directory
- "npm run build" in the client directory
- "npm start" in the main directory to load up a local application
Helpful Resources: 
For some of these you need to install heroku plugins 
-> npm install heroku-builds (sudo if need to)
-> "heroku plugins:install heroku-builds"
- "heroku logs --tail" for error logs
- "heroku run bash -a mern-version1"  for checking out the files in heroku system  *last "mern-version1" is the appname
- "heroku repo:reset -a mern-version1" reset the build instances
- "heroku builds:cancel <build-id> -a mern-version1" replace <build-id> with id found in Activity -> build log (Ex: ID ff55eb4e-0218-43bd-bbae-91cb841fa87c)
for stopping the builds if it get stuck in a loop




MERN Full Stack:

MongoDB
Express
React
Node.js

File Structure:

client (React side / Frontend)
  - public
    - index.html
  - src
    - components
    - pages
server (Backend)
  - model
  - routes
  - index.js (connection to mongoDB)


Version 1.0 note

Add - Build in Client

Add - static.json in Client

Add - Initial Procfile

Version 2.0 note

Add - Frontend/React addition (including workable taskbar)

Add - Discord API

Version 3.0 note

Add - Establish Connection with Database

Add - Map features and FAQ features

Add - Fix bugs that misintreprets the Routes

Version 4.0 note

Add - Directions on the Map API

Add - Fix the map bug for Heroku due to web-loader

Add - Admin Page Basis
