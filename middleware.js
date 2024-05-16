// middleware.js
module.exports = function (req, res, next) {
    const apiKey = req.get('x-api-key'); // Assuming the API key is passed in the header
  
    if (apiKey === '1234567890') {
      next(); // If the API key is valid, proceed to the next middleware/route handler
    } else {
      res.status(401).json({ error: 'Unauthorized' }); // If the API key is invalid, respond with an error
    }
  };
  