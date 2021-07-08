import { Payload } from "./Payload";

export class Cargo implements Payload {
    massKg: number;
    material: string;

    constructor(massKG: number, material: string) {
        this.massKg = massKG;
        this.material = material;
    }
}