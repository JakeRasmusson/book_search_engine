const typeDefs = `
    type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
    }

    type Book {
    authors: [String!]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
    }

    type Auth {
    token: ID!
    user: User
    }

    type Query {
    getSingleUser(userId: ID!): User
    }

    type Mutation {
    createUser(username: String!, email: String!, password: String!, savedBooks: [String]): Auth
    loginUser(email: String!, passowrd: String!): Auth
    }

`

module.exports = typeDefs