
// This paper represents a bill
class Paper {

    // text represents the bill's description
    constructor(text, paid, amount){
        this.text = text;
        this.paid = paid;
        this.amount = amount;
        this.details = [];
    }

    addDetail(detail){
        if(detail !== null){
            if(!Number.isNaN(detail.amount)){
                if(detail.amount > 0){
                    this.details.push(detail);
                }
            }
        }
    }

    // This method print and return the bill's description
    getAndPrint(){
        console.log(this.text);
        return this.text;
    }

    // This method returs true when the bill is paid, otherwise false
    paid(){
        return this.paid;
    }

    getTotal(){
        this.amount * 0.16;
    }
}