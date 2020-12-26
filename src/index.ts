interface Human {
    name: string;
    age: number;
    gender: string;
}

const person = {
    name: "Jin",
    age: 26,
    gender: "male",
};

const sayHi = (person: Human): string => {
    const {name, age, gender} = person;
    return `Hello ${name}, you are ${age}, you are a ${gender}!`;
}

const result = sayHi(person);
console.log(result);

export {};
