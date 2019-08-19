import { gql } from "apollo-server-express";

const Auth = gql`
  type Auth {
    user: User!
    account: Account!
  }

  type AuthResponse {
    ok: Boolean!
    errors: [Error!]
    auth: Auth
  }

  input AuthInput {
    accountId: String!
  }

  extend type Query {
    auth: AuthResponse!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  extend type Mutation {
    login(input: LoginInput!): AuthResponse!
    logout: Response!
  }
`;

export default Auth;
