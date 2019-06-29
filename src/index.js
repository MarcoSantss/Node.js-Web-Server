const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();
const port = 3000;
const staticSource = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs"); //Setur handlebars engine (Dynamic content)
app.set("views", viewsPath); //Custom location to the hbs files (Default is 'views')
hbs.registerPartials(partialsPath); //Partials location (nodemon src/app.js -e, for restart the server when partials changes)
app.use(express.static(staticSource)); //Setup static directory to serve

app.get("", async (req, res) => {
  res.render("index", {
    title: "Cats!",
    value: 5.0,
    cat: "Cat"
  });
});

app.listen(port, async () => {
  console.log(`Server is up on port ${port}.`);
});
