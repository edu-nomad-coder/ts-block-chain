const name = "Jin",
    age = 26,
    gender = 'male';

const sayHi = (name, age, gender = 'male') => {
    console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
}

sayHi(name, age);

export {};
