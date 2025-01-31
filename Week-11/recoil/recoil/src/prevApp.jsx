// import { useState } from 'react'
// import './App.css'
// /***************************************************************************************
//  * STEP 1: INSTALL RECOIL
//  * STEP 2: WRAP INSIDE RECOIL IN APP 
//  * STEP 3: REPLACING WITH AN ATOM HERE COUNT USESTATE
//  * STEP 4: NEW STORE FOLDER THEN ATOM FOLDER AND CREATE counter.js
//  * step 5: import from counter.js
//  */


// function App() {
//    const [count, setCount] = useState(0); //replacing this with atom


//   return (
//     <>
//       <Counter />
//     </>
//   )
// }

// function Counter() {
//   const [count, setCount] = useState(0);
//   return (<div>

//     {/* old */}
//     {/* <CurrentCount count={count} />
//     <Increase setCount={setCount} />
//     < Decrese setCount={setCount} /> */}


//   </div>)
// }

// function CurrentCount() {
//   return (<div>
//     {count}
//   </div>)
// }

// function Increase() {

//   function increase() {
//     setCount(c => c + 1);
//   }
//   return <div>
//     <button onClick={increase}>Increse</button>
//   </div>
// }

// function Decrese() {

//   function decrese() {
//     setCount(c => c - 1);
//   }

//   return (<div>
//     <button onClick={decrese}>Decrese</button>
//   </div>)
// }

// export default App
