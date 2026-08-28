const { createServer } = require("http");
const next = require("next");

const dev = process.env.NODE_ENV === "development";
const hostname = "0.0.0.0";
const port = parseInt(process.env.PORT || "7878", 10);

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = new URL(req.url, `http://${req.headers.host || "localhost:7878"}`);
      const query = {};
      parsedUrl.searchParams.forEach((val, key) => {
        query[key] = val;
      });
      await handle(req, res, {
        pathname: parsedUrl.pathname,
        query,
      });
    } catch (err) {
      console.error("Error occurred handling request:", err);
      res.statusCode = 500;
      res.end("Internal Server Error");
    }
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> AIShyp (${dev ? "Development" : "Production"}) Server ready on http://${hostname}:${port}`);
  });
});
