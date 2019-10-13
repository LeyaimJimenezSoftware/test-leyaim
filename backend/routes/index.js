var express = require('express')
var router = express.Router()
const items = require('./utils/sotore')

const store = { 
  items: {
    PANTS: { name:'Pants', price: '$5.00'},
    TSHIRT: { name:'T-Shirt', price: '$20.00'},
    HAT: { name:'Hat', price: '$7.50'}
  }
}

router.get('/items', function(req, res, next) {
  if(res.status(200)) { 
    res.status(200).json(store)
  } else {
    res.status(400).json('400')
  }
});

router.post('/store', function(req, res, next) {
  if(res.status(200)) {
    const finalPrice = items.price(req.body)
    res.status(200).json(finalPrice)
  } else {
    res.status(400).json('400')
  }
});

module.exports = router;
