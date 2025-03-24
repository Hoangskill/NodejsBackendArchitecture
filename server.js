const app = require("./src/app");
const config = require("./src/configs/config.mongodb");

const PORT = config.app.port;

const server = app.listen(PORT, () => {
    console.log(`WSV running on port ${PORT}`);
});

process.on('SIGINT', () => {
    server.close(() => console.log('WSV closed'));
});
