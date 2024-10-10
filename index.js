// import area

// const something = require(some-library)

const express = require("express");
const { myMiddleWere1, myMiddleWere2 } = require("./MyMiddilewere");

require("dotenv").config();

// Ever function return something
const app = express();

const PORT = process.env.PORT;

app.get(
  "/students",
  (req, res, next) => {
    next();
  },
  myMiddleWere1,
  (req, res) => {
    console.log(req.host);

    res.json({ name: "Amar Kumar" });
  }
);

//
app.use(express.json());

app.post("/students", myMiddleWere1, myMiddleWere2, (req, res) => {
  // console.log(req.host);
  let name1 = req.body.name1;
  res.json({
    name: "Amar Kumar",
    name1,
  });
});

app.listen(PORT, () => {
  console.log(`This Server is running on ${PORT} \n My Nodejs class 6 `);
});
