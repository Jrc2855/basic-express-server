'use strict';

const validator = (req, res, next) => {
  if (req.query.person) {
    next();
  } else {
    throw new Error("Please enter a name.");
  }
}

module.exports = validator;