import app from "./app";

/**
 * Start Express server.
 */

const server = app.listen(3000, () => {
  console.log(
    "  App is running at http://localhost:%d in %s mode",
    app.get("PORT"),
  );
});

export default server;