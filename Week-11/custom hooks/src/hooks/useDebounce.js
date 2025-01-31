import { useRef } from "react";


export function useDebounce(orignalfn){
    const currentClock=useRef();

    const fn=()=>{
        clearTimeout(currentClock.current);
        currentClock.current=setTimeout(orignalfn,200);
    }

    return fn;
}