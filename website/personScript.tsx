

export interface IPerson {
    firstName: string;
    lastName: string;
}

export class Person implements IPerson{
    firstName : string;
    secondName? : string;
    lastName : string;
    fullName: string;
    
    constructor(firstName1: string ,lastName: string, secondName?: string){
        this.firstName = firstName1;
        this.lastName = lastName;

        if(secondName == undefined){
            this.secondName = "default";
        }
        else{ this.secondName = secondName; }

        this.setFullName();
    }

    private setFullName() {
        this.fullName = "Vorname: \n" + this.firstName + " \nZweiter Name(Falls vorhanden): \n" + this.secondName + " \nNachname: \n" + this.lastName;      
        
        return this.fullName;
    }
}


export class Animal {
    Type : string;
    Age : number;

    constructor(age: number, type?: string){
        this.Age = age;
        this.Type = type;
    }
    
}