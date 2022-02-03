const Bank = require("./Bank")

class CitiBank extends Bank{
    processPayment(){
        console.log(`your amount ${this.amount} is payed to ${this.account}`)
    }
    processRefund(){
        console.log(`Your amount ${this.amount} is refunded`)
    }
}

module.exports = Bank;

