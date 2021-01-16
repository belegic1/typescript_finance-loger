import {HasFormatter} from '../interfaces/HasFormater'

export class Payment implements HasFormatter{
    constructor(
        readonly recipient: string,
        private details: string,
        public amount: number
    ){}

    format(){
        return `${this.recipient} is owned €${this.amount} for ${this.details} `
    }
}