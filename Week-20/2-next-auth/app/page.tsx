// "use client";

// import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

// export default function Home() {
//     return(
//       <SessionProvider>
//         <Authlogic/>
//       </SessionProvider>
//     )
// }


// function Authlogic(){
//   // how to know the user is logged in or not 
//   //     to show login and logout button

//   const session=useSession();
//   //to use useSession we have to wrap whole component in SessionProvider
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       hi there
//       {session.status==="authenticated" && <button onClick={()=>signOut()}>Logout</button>} 
//       {session.status==="unauthenticated" && <button onClick={()=>signIn()}>Sign in</button>}
//       {/* //if authenticated show logout Sign in */}
//     </div>
//   );
// }

/****************************************************************************************** */
// this is client side rendering


// this is fully erver side rendering
import { getServerSession } from "next-auth"

export default async function Home() {
  const session=await getServerSession();

  //for serverside rendering
    //we can do this here
  // const userProfile=db.users.findOne({
  //   where:{
  //     email:session.email
  //   }
  // })

    return(
      <div>
        {JSON.stringify(session)}
      </div>
    )
}