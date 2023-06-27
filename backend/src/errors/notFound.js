// express API "not found" handler 

function notFound(req, res, next) {
  next({ status: 404, message: `Path is straight up not found: ${req.originalUrl}` });
}

module.exports = notFound;