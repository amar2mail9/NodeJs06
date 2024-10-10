const myMiddleWere1 = (req, res, next) => {
  req.body.name1 = req.body.name1.toUpperCase();
  next();
};

const myMiddleWere2 = (req, res, next) => {
  // This middleware can perform other tasks if needed
  next();
};

// Exporting both middlewares
module.exports = {
  myMiddleWere1,
  myMiddleWere2,
};
