function Address(street,city,postCode){
    this.street = street;
    this.city = city;
    this.postCode = postCode;
}

const address1 = new Address('a','b','c');
const address2 = new Address('a','b','c');
const address3 = new Address('a','ba','c');

function areEqual(address1,address2){
    
    for (const key in address1) {
        if (!(key in address2)) 
            return false;
        if(address1[key] !== address2[key])
            return false;
    }

    return true;
}

function areSame(address1,address2){
    return address1 === address2;
}

console.log(areEqual(address1,address2));
console.log(areEqual(address1,address3));

console.log(areSame(address1,address2));
console.log(areSame(address1,address1));
console.log(areSame(address2,address3));
console.log(areSame(address2,address2));
