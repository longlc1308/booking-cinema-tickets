import app from "./app";
const port = process.env.PORT || 3000;

/**
 * Start Express server.
 */

const server = app.listen(port, () => {
  console.log(
    `App is running at http://localhost:${port}`
  );
});

export default server;