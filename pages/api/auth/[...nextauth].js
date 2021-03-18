import NextAuth from 'next-auth'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [],

  // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL,
  pages: {
    signIn: '/login'
  }
})