const createProduct = (req, res) => {
    const newProduct = req.body;
    // Add logic to create the product in your database or data store
    // For now, we'll just send back the received product as a response
    res.status(201).json(newProduct);
  };
  
  module.exports = {
    createProduct,
  };
  