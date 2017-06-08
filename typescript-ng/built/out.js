const generateUniqId = (function () {
    let id = 0;
    function gen() {
        return id++;
    }
    return gen;
})();
readonly;
id: number,
    age ?  : number,
    [propName, string];
any;
class Bank {
    constructor(bankName, capital, customerBalanceLimit) {
        this.readonly = bankName;
        let customers = [];
        this.addCustomer = (c) => { customers.push(c); };
        this.removeCustomerById = (id) => {
            let arrId = customers.findIndex(c => c.id === id);
            if (arrId !== -1)
                customers.splice(arrId, 1);
        };
        this.getCustomerById = (id) => {
            let c = customers.find(c => c.id === id);
            return (c === -1) ? undefined : c;
        };
        let bankCapital = capital;
        this.bankName = bankName;
        this.customerBalanceLimit = customerBalanceLimit;
        // setTimeout(() => {
        // }, 1000);
    }
    becomeCustomer(posibleCustomer) {
        if (posibleCustomer.balance >= this.customerBalanceLimit)
            this.addCustomer(posibleCustomer);
    }
}
class Customer {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
        this.id = generateUniqId();
    }
}
class SuperCustomer extends Customer {
    constructor(...args) {
        super(...args);
    }
}
const ukrSibBank = new Bank('УкрСибБанк', 2000000, 1000);
const vasilii = new Customer('Вася', 950);
//vasilii.id = 4; //error (id - readonly prop)
//ukrSibBank.bankName = 'ddd';// the same error
////////////////////////////////////////////////////
//////////////Types////////////////
//            Boolean
let isDone = false;
//            Number
let decimal = 6;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
//            String
let color = "blue";
//            Array
let arr1 = [1, 2, 4];
let arr2 = [1, 2, 3];
//            Tuple
let tuple = ['string', 228];
//            Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
let colorName = Color[2];
let c = Color.Green;
console.log(colorName, c);
//            Any
let anything = 5;
anything = 'now I am string';
//            Void
let lol = null;
lol = undefined;
function lolFunc(r) {
    console.log(r);
}
//            Null and Undefined
let u = undefined;
let n = null = null;
//            Never
// Function returning never must have unreachable end point
function error(message) {
    throw new Error(message);
}
// Inferred return type is never
function fail() {
    return error("Something failed");
}
// Function returning never must have unreachable end point
function infiniteLoop() {
    while (true) {
    }
}
//            Type assertions (“trust me, I know what I’m doing”)
let someValue1 = "this is a string";
let strLength1 = someValue1.length;
let someValue = "this is a string";
let strLength = (someValue), as = string, length;
////////////Destructuring///////////
// you know it from ES6
/////////////Interfaces////////////
//# sourceMappingURL=out.js.map