const sayHi = (name: string, age: number, gender: string = 'male'): string => {
    return `Hello ${name}, you are ${age}, you are a ${gender}!`;
}

const result = sayHi("Jin", 26, "male");
console.log(result);

export {};
