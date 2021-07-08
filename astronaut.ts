import {Payload} from "./Payload";
export class Astronaut implements Payload {
    massKg: number;
    name: string;

    constructor(massKG: number, name: string) {
        this.massKg = massKG;
        this.name = name;
    }
}