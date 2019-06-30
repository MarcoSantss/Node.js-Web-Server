const app = require("./app");

const port = process.env.PORT || 3000;

app.listen(port, async () => {
  console.log(`Server is up on port ${port}.`);
});
