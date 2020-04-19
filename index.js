// this reads in all of our environment variables from .env
require("dotenv").config();
const server = require("./api/server.js");
const welcome = require("./welcome/welcome-router");

server.use("/", welcome);

const port = 5000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
