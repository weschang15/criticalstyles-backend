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

  type NewUserResponse {
    ok: Boolean!
    errors: [Error!]
    user: User
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
    createUser(input: NewUserInput!): NewUserResponse!
    login(input: LoginInput!): UserResponse!
    logout: Response!
  }
`;

export default User;
