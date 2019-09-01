import { gql } from "apollo-server-express";

const User = gql`
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    accounts: [Account!]!
  }

  input NewUserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  type UserResponse {
    ok: Boolean!
    errors: [Error!]
    user: User
  }

  type CurrentUserResponse {
    ok: Boolean!
    errors: [Error!]
    user: User
  }

  extend type Query {
    currentUser: CurrentUserResponse!
  }

  extend type Mutation {
    createUser(input: NewUserInput!): UserResponse!
  }

  extend type Subscription {
    userAdded(accountId: String!): User
  }
`;

export default User;
