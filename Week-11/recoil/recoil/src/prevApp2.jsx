import { useState } from 'react'
import './App.css'
import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from 'recoil';
import { counterAtom } from './store/atoms/counter';
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
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  )
}

function Counter() {
  return (<div>

    {/* no passing of count variable */}
    <CurrentCount />
    <Increase />
    < Decrese />
  </div>)
}

function CurrentCount() {

  const count = useRecoilValue(counterAtom);
  //When an atom’s state changes, all 
  // components that subscribe to that atom will re-render

  //now only currentCount component is subscibed to 
  // atom therefore only it will re-render

  return (<div>
    {count}
  </div>)
}

function Increase() {
  const setCount = useSetRecoilState(counterAtom); //this component is subscribed to the setter not value

  function increase() {
    setCount(c => c + 1);
  }
  return <div>
    <button onClick={increase}>Increse</button>
  </div>
}

function Decrese() {

  const setCount = useSetRecoilState(counterAtom); //this component is subscribed to the setter not value

  function decrese() {
    setCount(c => c - 1);
  }

  return (<div>
    <button onClick={decrese}>Decrese</button>
  </div>)
}

export default App


/************************************************************************* 
 * MEMO
 * In react if the parent re-renders every child is re-rendered
 *  wheather the passed props changed or not
 * 
 * if we use memo only parent will re-render 
 * when props passed to child gets changed only then child will re render
 * 
 * SYNTAX
 * just wrap function  inside memo()
  * const memoIncrese=memo(function Increase() {


    function increase() {
      setCount(c => c + 1);
    }
    return <div>
      <button onClick={increase}>Increse</button>
    </div>
})  
*/
