const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const config = require("./config/keys");

const app = express();
const PORT = process.env.PORT || 5000;

//Routes
const dialogFlowRoutes = require("./routes/dialogFlow");
const fulfillmentRoutes = require("./routes/fulfillment");

app.use(bodyParser.json());

app.get("/api", (req, res) => {
  res.send({ hello: "there" });
});

app.use(dialogFlowRoutes);
app.use(fulfillmentRoutes);


if (process.env.NODE_ENV === "production") {
  // js and css files
  app.use(express.static("client/build"));
  // index.html
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});
