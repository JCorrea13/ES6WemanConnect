class Detail{
    constructor(name, amount){
        this.name = name;
        this.amount = amount;
    }
}

class Bill{
     constructor(){
         this.details = [];
     }

     addDetail(detail){
         this.details.push(detail);
     }

     [Symbol.iterator](){
        let current = 0;
        return  {
            next: function(){
             return { done: current >= this.details.length, value: this.details[current++]};
            }.bind(this)
        };
     }
}



const bill = new Bill();
bill.addDetail(new Detail('breakfast', 55));
bill.addDetail(new Detail('taxi', 80));

for(let detail of bill){
    console.log(detail.amount);
}
