import { ICurrency } from "../interfaces/ICurrency";
import { ref, Ref } from 'vue';

export class Currency implements ICurrency {
    private static instance: ICurrency;
    public defaultRoundTo: number;
    constructor(roundTo: number) {
        this.defaultRoundTo = roundTo;
        if (Currency.instance) {
            return Currency.instance;
        }
        Currency.instance = this;
    }

    public addComma(payload: number | string, roundTo: number = this.defaultRoundTo): Ref<string> {
        let res = '';
        const num: string = parseFloat(payload.toString()).toFixed(roundTo).toString();
        if (num !== 'NaN')
            res = num.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        return ref<string>(res);
    }

    public removeComma(payload: string): Ref<string> {
        const res: string = payload.replace(/,/gi, '');
        return ref<string>(res);
    }
    public fixed(payload: string, roundTo: number = this.defaultRoundTo): Ref<string> {
        const res: string = parseFloat(payload).toFixed(roundTo).toString();
        return ref<string>(res);
    }
}