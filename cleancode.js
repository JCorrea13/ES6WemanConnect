const tax  = 1.16;

class Bill {
    constructor(description, isPaid, amount){
        this.description = description;
        this.isPaid = isPaid;
        this.amount = amount;
        this.details = [];
    }

    addDetail(detail){
        if(detail === null || 
            Number.isNaN(detail.amount) || 
            detail.amount <= 0)
            return;

        this.details.push(detail);
    }

    getDescription(){
        return this.description;
    }

    isPaid(){
        return this.isPaid
    }

    getTotal(){
        this.amount * tax;
    }
}