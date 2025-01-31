import { atom, selector } from "recoil";

export const counterAtom=atom({
    default:0,
    key:"counter"  // to uniquely identify atom
})

// for selector
export const evenSelector=selector({
    key:"isEvenSelector",
    get: function({get}){
        const currentCount=get(counterAtom); //this shows this is derived 
        //taking value from counterAtom ...previously define atom

        const isEven=(currentCount% 2==0);
        return isEven;
    }
})