'use strict';

function notFound (req, res) {
  console.log('hello');
  res.status(404).json({
    error: 404,
    route: req.path,
    message: 'SERVER ERROR: Page not found.',
  });
};


module.exports = notFound;