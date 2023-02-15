'use strict';

const logger = (req, res, next) => {
  req.log = 'this is my logger middleware!';
  console.log('Logger Proof of Life');

}

module.exports = logger;