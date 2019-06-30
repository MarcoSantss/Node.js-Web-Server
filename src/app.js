const express = require("express");
const path = require("path");
const hbs = require("hbs");
const { catRoute } = require("./routes");

const app = express();
const staticSource = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs"); //Setur handlebars engine (Dynamic content)
app.set("views", viewsPath); //Custom location to the hbs files (Default is 'views')
hbs.registerPartials(partialsPath); //Partials location (nodemon src/app.js -e, for restart the server when partials changes)
app.use(express.static(staticSource)); //Setup static directory to serve
app.use(catRoute);

module.exports = app;
