const { createServer } = require("http");
const next = require("next");

const port = 7878;
const host = "0.0.0.0";
const dev = false;

const app = next({ dev, hostname: host, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res);
  }).listen(port, host, () => {
    console.log(`> Ready on http://${host}:${port}`);
  });
});
