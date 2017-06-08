const generateUniqId = (function(){
    let id = 0;
    function gen() {
        return id++;
    }
    return gen;
})();

interface CustomerInterface {
    name: string;
    balance: number;
    readonly id: number;
    age?: number;
    [propName: string]: any;
}

interface RichCustomerInterface extends CustomerInterface {

}

interface BankInterface {

}

class Bank {
    public addCustomer;
    public removeCustomerById;
    public getCustomerById;
    public readonly bankName: string;
    public customerBalanceLimit: number;

    constructor(bankName: string, capital: number, customerBalanceLimit: number) {
        let customers: Array<CustomerInterface> = [];
        this.addCustomer = (c: CustomerInterface) => {customers.push(c)};
        this.removeCustomerById = (id: number) => {
            let arrId: number = customers.findIndex(c => c.id === id);
            if (arrId !== -1) customers.splice(arrId, 1);
        };
        this.getCustomerById = (id: number) => {
            let c: any = customers.find(c => c.id === id);
            return (c === -1) ? undefined : c;
        };
        let bankCapital: number = capital;
        this.bankName = bankName;
        this.customerBalanceLimit = customerBalanceLimit;
        // setTimeout(() => {

        // }, 1000);
    }

    becomeCustomer(posibleCustomer: CustomerInterface) {
        if (posibleCustomer.balance >= this.customerBalanceLimit) this.addCustomer(posibleCustomer);
    }
}

class Customer implements CustomerInterface {
    public name: string;//there is no need to add type, because 'class Customer implements CustomerInteface'
    public balance: number;//  -||-
    public id: number;//  -||-

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

let isDone: boolean = false;

//            Number

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//            String

let color: string = "blue";

//            Array

let arr1: number[] = [1, 2, 4];

let arr2: Array<number> = [1, 2, 3];

//            Tuple

let tuple: [string, number] = ['string', 228];

//            Enum

enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];
let c: Color = Color.Green;
console.log(colorName, c);

//            Any

let anything: any = 5;

anything = 'now I am string';

//            Void

let lol: void = null;
lol = undefined;

function lolFunc(r: string): void {
    console.log(r);
}

//            Null and Undefined

let u: undefined = undefined;
let n: null = null;

//            Never

// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}

// Inferred return type is never
function fail() {
    return error("Something failed");
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
    while (true) {
    }
}

//            Type assertions (“trust me, I know what I’m doing”)

let someValue1: any = "this is a string";
let strLength1: number = (<string>someValue1).length;

let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

////////////Destructuring///////////

// you know it from ES6

/////////////Interfaces////////////



