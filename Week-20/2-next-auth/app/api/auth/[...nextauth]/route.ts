import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
// import GoogleProvider from "next-auth/providers/google";



const handler = NextAuth({
    providers: [
        CredentialsProvider({
          // The name to display on the sign in form (e.g. 'Sign in with...')
          name: 'Email',
          // The credentials is used to generate a suitable form on the sign in page.
          // You can specify whatever fields you are expecting to be submitted.
          // e.g. domain, username, password, 2FA token, etc.
          // You can pass any HTML attribute to the <input> tag through the object.
          credentials: {
            username: { label: "Username", type: "text", placeholder: "abc@gmail.com" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
            // You need to provide your own logic here that takes the credentials
            // submitted and returns either a object representing a user or value
            // that is false/null if the credentials are invalid.
            // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
            // You can also use the `req` object to obtain additional parameters
            // (i.e., the request IP address)
            const username=credentials?.username;
            const password=credentials?.password;
            

            console.log(username);
            console.log(password);
            //db request to check if this username and password are correct
            const user={
                name:"Ujjwal",
                id:"1",
                username:"ujjwalaglawe30@gmail.com"
            } //temp response--asumes db returns a user

            if(user){
                return user;
            }
            else{
                return null;
            }
          }
        }),
        // GoogleProvider({
        //     clientId: "asx",
        //     clientSecret: "sdsd"
        //   })
      ],
      secret:process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST }