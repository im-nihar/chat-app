Steps:

//initial package.json 
npm init -y

//then install all the necessary dependancies 
npm install 

npm install --save cors nodemon express socket.io

//write start script in package.json
"start": "nodemon index.js"

// to start:
// npm start