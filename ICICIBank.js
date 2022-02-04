const Bank = require('./Bank');

class ICICIBank extends Bank{
    processPayment(){
        console.log(`IC your amount ${this.amount} is payed to ${this.account}`)
    }
    processRefund(){
        console.log(`IC Your amount ${this.amount} is refunded`)
    }
}

module.exports = ICICIBank;