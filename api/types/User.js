import { gql } from "apollo-server-express";

const User = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    sites: [Site!]!
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
    user: User!
  }

  input LoginInput {
    email: String!
    password: String!
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
    login(input: LoginInput!): UserResponse!
  }
`;

export default User;
