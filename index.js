const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send(`Demo Hệ thống mạng: AWS VPS`);
});

app.get("/:name", (req, res) => {
  res.send(`Học viên: ${req.params.name}`);
});
