

export interface Person {
    firstName: string;
    lastName: string;
}

export class Animal {
    Type : string;
    Age : number;

    constructor(age: number, type?: string){
        this.Age = age;
        this.Type = type;
    }
    
}