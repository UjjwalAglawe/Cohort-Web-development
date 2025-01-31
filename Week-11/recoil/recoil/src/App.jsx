import { useState } from 'react'
import './App.css'
import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from 'recoil';
import { counterAtom, evenSelector } from './store/atoms/counter';
/***************************************************************************************
 * CHECK DIFF with prevApp.jsx
 * STEP 1: INSTALL RECOIL
 * STEP 2: WRAP INSIDE RECOIL IN APP 
 * STEP 3: REPLACING WITH AN ATOM HERE COUNT USESTATE
 * STEP 4: NEW STORE FOLDER THEN ATOM FOLDER AND CREATE counter.js
 * step 5: import from counter.js
 */




function App() {

  return (
    <div>
      <RecoilRoot>

        <Buttons />
        <Counter />
        <IsEven />
        
      </RecoilRoot>
    </div>
  )
}

function Buttons() {
  const setCount = useSetRecoilState(counterAtom);

  function increse() {
    setCount(c => c + 1);
  }

  function decrese() {
    setCount(c => c - 1);
  }


  return (
    <div>
      <button onClick={increse}>Increse</button>
      <button onClick={decrese}>Decrese</button>
    </div>
  )
}

function Counter() {
  const count = useRecoilValue(counterAtom);

  return (
    <div>
      {count}
    </div>
  )
}

function IsEven() {
  const even = useRecoilValue(evenSelector);

  return (
    <div>
      {even ? "Even" : "Odd"}
    </div>
  )
}



export default App



