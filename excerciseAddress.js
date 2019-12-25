console.log('address excercise:');

function Address(street,city,zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
    this.showAddress = function(){
        for (const key in this) {
            if(typeof this[key] != 'function'){
            console.log(`${key}:${this[key]}`);
            }
        }
    };
}

let address1 = new Address('Moinul Road','Dhaka','1206');
address1.showAddress();