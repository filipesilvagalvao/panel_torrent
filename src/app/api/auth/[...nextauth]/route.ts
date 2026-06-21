import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const email = process.env.EMAIL
const password = process.env.PASSWORD

const handler = NextAuth({
    pages: {
        signIn: "/"
    },
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req){
                if(!credentials){
                    return null
                }

                if(credentials.email === email && credentials.password === password){
                    return {
                        id:"1",
                        name:"Fernando",
                        email:"fo1505292@gmail.com"
                    }
                }

                return null
            }
        })
    ]
})

export { handler as GET, handler as POST}