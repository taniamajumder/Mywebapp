const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Sample API endpoint
app.get("/api/hello", (req, res) => {
  res.send({ message: "Hello from Express backend 👋" });
});

app.listen(5000, "0.0.0.0", () => {
  console.log("Backend running on http://0.0.0.0:5000" );
});
