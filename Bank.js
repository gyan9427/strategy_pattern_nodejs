//Strategy Class
class Bank{
    constructor(amount,account){
        this.amount = amount;
        this.account = account;
    }
    pay(){
        return this.processPayment();
    }
    refund(){
        return this.processRefund();
    }
}

module.exports = Bank;

//Since it is the main class that will be carrying out the strategy and this is the main attribute that is need by an entity to process the payment (an entity has tobe a BANK)
