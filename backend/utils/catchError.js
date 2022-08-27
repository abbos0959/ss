const appError = require("./appError");

const catchError = function (funksiya) {
   const func = (req, res, next) => {
      funksiya(req, res, next).catch((err) => next(new appError(err.message, 404)));
   };
   return func;
};

module.exports = catchError;
