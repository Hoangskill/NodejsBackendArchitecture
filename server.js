const app = require("./src/app");

const PORT=3055;

const server = app.listen(PORT, () => {
    console.log(`WSV running on port ${PORT}`);
});

process.on('SIGINT', () => {
    server.close(() => console.log('WSV closed'));
});