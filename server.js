const express = require("express");
const db = require("./models");
const htmlRoutes = require("./routes/html-routes");
const studentRoutes = require("./routes/student-api-routes");
const petRoutes = require("./routes/pet-api-routes");
const exphbs = require("express-handlebars");
// Sets up the Express App
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(htmlRoutes);
app.use(studentRoutes);
app.use(petRoutes);

// Starts the server to begin listening
db.sequelize
  .sync({ force: false })
  .then(() => app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`)));
