var express = require('express');
var router = express.Router();
var Razorpay = require('razorpay');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/paynow', async (req, res, next) => {
  var instance = new Razorpay({ key_id: 'rzp_test_Gm8bpT3FVwLGYr', key_secret: 'zMe1SnAUpBVBMhiiOA33AF7n' });

  instance.orders.create({
    amount: 100,
    currency: "INR",
    receipt: "receipt#1",
    notes: {
      key1: "value3",
      key2: "value2"
    }
  }).then(payment => {
    console.log(payment)
    res.status(200).send({ message: payment })
  }).catch(err => {
    res.status(400).send({ message: err })
  })

})

module.exports = router;
