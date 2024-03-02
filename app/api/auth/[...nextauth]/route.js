import { connect } from "@/utils/config/dbConfig";
import Account from "@/utils/models/UserModel";

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions = {
    providers : [
        CredentialsProvider({
            name : "credentials" ,
            credentials: {},
            async authorize(credentials){
                 const {email,password} = credentials ;
                 try {
                    console.log(credentials);
                    await connect();
                    const user = await Account.findOne({email});
                    if(!user)throw new Error("Invalid User");

                    const passwordMatch = await bcrypt.compare(password, user.password);
                    console.log(passwordMatch)
                    if (!passwordMatch) throw new Error("Invalid Password");
                    
                    return user ;

                 } catch (error) {
                    console.log("Error :- From Auth.js  ", error);
                 }
            }
        }),

    ],
    session: {
        strategy: "jwt",
      },
    callbacks : {
        async jwt({ token, user }) {
            if (user) {
              console.log("callback jwt -> ",user);
              token.email = user.email;
              token.name = user.username;
            }
            return token ;
          },
          async session({ session, token }) {
            if (session.user) {
              session.user.email = token.email;
              session.user.name = token.name;
            }
            console.log(session);
            return session;
          },
          secret: process.env.NEXTAUTH_SECRET,
          
    }
}



const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };