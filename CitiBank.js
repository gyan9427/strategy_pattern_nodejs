const Bank = require("./Bank")

class CitiBank extends Bank{
    processPayment(){
        console.log(`your amount ${this.amount} is payed to ${this.account}`)
    }
    processRefund(){
        console.log(`Your amount ${this.amount} is refunded`)
    }
}

module.exports = CitiBank;

//Pay and refund are made as interface methods

// Since in case of JS there is no actual implementation of interface so here an interface instead of making it as the most dynamic one, over here the implementation is made very much general one