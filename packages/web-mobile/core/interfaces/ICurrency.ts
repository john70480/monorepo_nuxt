import { Ref } from 'vue';
export interface ICurrency {
    defaultRoundTo: number;
    addComma(payload: number | string, roundTo?: number): Ref<string>;
}