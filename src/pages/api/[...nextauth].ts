import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextApiRequest, NextApiResponse } from "next";

interface Credentials {
  email: string;
  password: string;
  accountName: string;
  fullname: string;
}

export default NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(
        credentials?: Credential | any,
        req?: NextApiRequest | any
      ) {
        // Add logic here to look up the user from the credentials supplied
        const { email, password, action } = credentials;

        if (action === "signin") {
          const res = await fetch(`${process.env.BASE_URL_API}/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: credentials?.username,
              password: credentials?.password,
            }),
          });
          const user = await res.json();
          return user;
        }
        if(action === 'register'){
          const res = await fetch(`${process.env.BASE_URL_API}/register`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: credentials?.username,
              password: credentials?.password,
            }),
          });
          const user = await res.json();
          return user;
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      session.user = token as any;
      return session;
    },
  },
  pages: {
    signIn: "/login",
    signOut: "/logout",
    newUser: "/register",
  },
});
