class Student {
    constructor(firstname , lastname) {
        this.firstname=firstname;
        this.lastname=lastname;
    }

      FullName (){
        return `My Full name is ( ${this.firstname} ${this.lastname} )`
    }

     Salam(){
        return `HALA wala ya m3rs ya mnyak m3ak 3mo ( ${this.firstname} )`
    }

};

function add(a,b){
    return a+b;
}

console.log(add(10,10));

let s1 = new Student('Abdelrahman' , 'Mohammed');
console.log(s1);
console.log(s1.FullName());
console.log(s1.Salam());



