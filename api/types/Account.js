import { gql } from "apollo-server-express";

const Account = gql`
  type Account {
    _id: ID!
    name: String!
    owner: User!
    users: [User!]!
    sites: [Site!]!
  }

  type AccountResponse {
    ok: Boolean!
    errors: [Error!]
    account: Account
  }

  input NewAccountInput {
    name: String!
    user: NewUserInput!
  }

  extend type Query {
    getAccount: AccountResponse!
  }

  extend type Mutation {
    createAccount(input: NewAccountInput!): AccountResponse!
  }
`;

export default Account;
