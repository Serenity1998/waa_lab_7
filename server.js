const jsonServer = require('json-server');
const cors = require('cors');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(cors()); // Add CORS support
server.use(middlewares);
server.use(router);

const port = 3001;
server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`);
});