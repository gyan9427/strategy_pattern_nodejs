//Context
class Payment{
    pay(processor){
        return processor.pay();
    }
    refund(processor){
        return processor.pay();
    }
}

module.exports = Payment;

//Here Payment is the context as this
//app is ment to process payment
//the processor is the strategy

//WHY processor is STRATEGY??? STRATEGY: a plan of action designed to achieve a long-term or overall aim.

//HERE the processor is the one which will be responsible for the continuation of the services as long as the app persists

