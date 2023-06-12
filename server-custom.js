const express = require("express");
const next = require("next");

const PORT = process.env.PORT || 5000;

const DEV = process.env.NODE_ENV !== "production";

const HOST = process.env.HOST || "localhost";

const app = next({ DEV, HOST, PORT });

const handle = app.getRequestHandler();
app
  .prepare()
  .then(async () => {
    const server = express();

    server.get("/images/favicon.png", (req, res) => {
      res
        .status(200)
        .sendFile("/favicon.png", { root: __dirname + "/public/images/" });
    });

    server.get("/manifest.json", (req, res) => {
      res
        .status(200)
        .sendFile("/manifest.json", { root: __dirname + "/public/" });
    });

    server.get("/", (req, res) => {
      return app.render(req, res, "/home", req.query);
    });

    server.get("/home", (req, res) => {
      return app.render(req, res, "/home", req.query);
    });

    server.get("/login", (req, res) => {
      return app.render(req, res, "/login", req.query);
    });

    server.get("/auth", (req, res) => {
      return app.render(req, res, "/auth", req.query);
    });

    server.get("/schedule", (req, res) => {
      return app.render(req, res, "/schedule", req.query);
    });

    server.get("/online-course", (req, res) => {
      return app.render(req, res, "/online-course", req.query);
    });

    server.get("/online-course/:slug", (req, res) => {
      return app.render(req, res, "/online-course/:id", { id: req.query.id });
    });

    server.get("/course-detail/:id", (req, res) => {
      return app.render(req, res, "/course-detail/[id]", { id: req.params.id });
    });

    server.all("*", (req, res) => {
      return handle(req, res);
    })

    server.listen(PORT, (err) => {
      if (err) {
        throw err;
      }
    });
  })
  .catch((error) => {
    console.error(error.stack);
    process.exit(1);
  });

module.exports = app;
