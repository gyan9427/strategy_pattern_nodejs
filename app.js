const Payment = require("./Payment");

const citi = require("./CitiBank");
const icici = require("./ICICIBank");


const payment = new Payment();

payment.pay(new citi(234,"101010"))