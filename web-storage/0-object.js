const obj1 = {};
const obj2 = new Object();

const obj3 = {
    name: 'Rosa',
    age: 33,
    favoriateColor: ['indigo', 'yellow', 'orange'],
    car: {
        make: 'BMW',
        mode: 'X5',
        year: 2020,
    },
    retired: false,
    // ES5
    sayHello: function () {
        console.log('hello');
    },
    // ES6
    sayHi() {
        console.log('hi');
    },
};

console.log(obj3);
