import { useEffect, useRef } from "react";


export function usePrev(value)
{
    const ref=useRef();

    useEffect(()=>{
        ref.current=value; //now set to 1
    },[value])

    return ref.current;  //return 0 then use effect called
}

//it returns first, then useEffect gets called later