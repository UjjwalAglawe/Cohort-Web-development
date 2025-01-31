import { useEffect, useState } from 'react'

import './App.css'

// //The return in useEffect runs when ummounting 
// //used for ex. clearing intervals

// //usecase: changing tab then unsubscribe previous tab
// //ex. linkdin if chagning from notification tab to feed tab then unsubscrive notification tab using useEffect unmounting


// // const Timer = function () {
// //   const [seconds, setSeconds] = useState(0);

// //   useEffect(() => {
// //     let clock = setInterval(() => {
// //       console.log("From inside clock");
// //       setcount(prev => prev + 1);

// //     }, 1000);

// //     //cleanup functions
// //     return function () {
// //       clearInterval(clock);
// //     }
// //   })

// // }

// /**********************************************************************************************************************************************/ 

// function App() {
//   const [currentTab, setcurrentTab] = useState(1);
//   const [currentTabData, setcurrentTabData] = useState({});
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {

//     setLoading(true);


//     fetch("https://jsonplaceholder.typicode.com/todos/" + currentTab)
//       .then(async res => {

//         const json = await res.json();
//         setcurrentTabData(json);
//         setLoading(false);

//       });
//   }, [currentTab])


//   return (
//     <>
//       <button onClick={function () { setcurrentTab(1) }} style={{ color: currentTab == 1 ? "red" : 'black' }}>Todo 1</button>
//       <button onClick={function () { setcurrentTab(2) }} style={{ color: currentTab == 2 ? "red" : 'black' }}>Todo 2</button>
//       <button onClick={function () { setcurrentTab(3) }} style={{ color: currentTab == 3 ? "red" : 'black' }}>Todo 3</button>
//       <button onClick={function () { setcurrentTab(4) }} style={{ color: currentTab == 4 ? "red" : 'black' }}>Todo 4</button>

//       <br />
//       {loading ? "Loading..." : currentTabData.title}
//     </>
//   )
// }


/**********************************************************************************************************************************************/
// 3- PROPS
function App() {


  return <div style={{display:'flex' , background:'gray'}}>

    {/* passing propos in two ways  */}

    {/* 1st way */}

    {/* <Card children={<div style={{ color: "green" }}> What do you want to post
      <input type='text'></input>
    </div>}>
    </Card> */}

      {/* 2nd way */}
    <Card>
      <div style={{ color: "green" }}> What do you want to post
        <br></br>
        <input type='text'></input>
      </div>
    </Card>


    <Card>
      Hi there
    </Card>

  </div>
}

function Card({ children }) {
  return <div style={{ background: "white", borderradius: 10, color: "black", padding: 10, margin: 10 }}>
    {children}

  </div>
}

export default App
