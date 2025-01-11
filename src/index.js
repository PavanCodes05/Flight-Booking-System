const express = require('express');

const { ServerConfig, Logger } = require("./config/index.js");
const apiRoutes = require('./routes/index.js')

const app = express();

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log(`Server Listening to the port: ${ServerConfig.PORT}`);
})