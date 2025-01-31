import { useState } from 'react'
import './App.css'
import { useFetch, usePostTitle } from './hooks/useFetch'
import { usePrev } from './hooks/usePrev';
import { useDebounce } from './hooks/useDebounce';

// function App() {
//   // const postTitle=usePostTitle();
//   const {finalData,loading}=useFetch("https://jsonplaceholder.typicode.com/posts/1");
//   console.log(finalData);
  
//   if(loading){
//     return<span>
//     Loading</span>
//   }

//   return (
//     <div>
//       {/* {postTitle} */}

//       {JSON.stringify(finalData)}
//     </div>
//   )
// }


// 2nd
// function App()
// {
//   const [state,setState]=useState(0);

//   const prev=usePrev(state); //0=>1  prev=0

//   return<>
//     <p>{state}</p>
//     <button onClick={()=>{
//       setState((curr)=>curr+1);
//     }}>
//       Click
//     </button>

//     <p>The previous value was {prev}</p>
//   </>
// }


//3

function App()
{

  function sendDatatoBackend()
  {
    fetch("a[i.amazon.com/search");
  }

  const debouncedfn=useDebounce(sendDatatoBackend);

  return(<>
    <input type='text' onChange={debouncedfn}></input>
  </>)
}

export default App
