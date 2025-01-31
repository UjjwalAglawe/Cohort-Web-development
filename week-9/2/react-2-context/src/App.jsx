import { createContext, useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const BulbContext = createContext();
/*
STEPS: 
1. CREATE/DEFINE THE CONTEXT
2. WRAPED THE CHILDREN USING PROVIDER
3. PROVIDE THE VALUE YOUR CHILDREN WANT TO HAVE (like props)
4. CONSUME THE CONTEXT (useContext)
*/

/** A library like recoil will not re render unnecesarry components  */

export function BulbProvider({ children })  //children will content what is inside the <BulbProvider> component 
//here it is children = <Light/>
{

  const [bulbOn, setBulbOn] = useState(true);

  return <BulbContext.Provider value={{
    bulbOn: bulbOn,
    setBulbOn: setBulbOn
  }}>

    {children}
  </BulbContext.Provider>

}
function App() {
  // const [bulbOn, setBulbOn] = useState(true);

  return (
    <>
      {/* //Provider provides the context to its childeren means that are wrapped under provider here light */}

      {/* to hide the provider use and use it as component 
      genrally used in creating libraries */}

      {/* <BulbContext.Provider   value={{
        bulbOn:bulbOn,
        setBulbOn:setBulbOn
      }}>
        <Light /> 
      </BulbContext.Provider> */}


      {/* simply using provider as component */}
      <BulbProvider>
        <Light />
      </BulbProvider>
      {/* this looks cleaner as all the logic is hidden and we are only using a components */}
    </>
  )
}
function Light() {
  return <>
    <LightBulb />
    <LightSwitch />
  </>
}

function LightBulb() {
  const { bulbOn } = useContext(BulbContext);
  //here only using bulbOn
  return <>
    {bulbOn ? "Bulb On" : "Bulb Off"}
  </>
}

function LightSwitch() {
  // here using both the values 
  const { bulbOn, setBulbOn } = useContext(BulbContext);

  function toggle() {
    setBulbOn(!bulbOn);
  }

  return <button onClick={toggle}>Toggle</button>
}
export default App
