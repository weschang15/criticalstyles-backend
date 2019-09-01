import { gql } from "apollo-server-express";

const Account = gql`
  type Account {
    _id: ID!
    name: String!
    owner: User!
    summary: AccountSummary!
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

  input AccountInput {
    id: String
  }

  extend type Query {
    getAccount: AccountResponse!
  }

  type NewAccountResponse {
    ok: Boolean!
    errors: [Error!]
    account: Account
    owner: User
  }

  input NewAccountUserInput {
    email: String!
    accountId: String!
  }

  input SwitchAccountInput {
    accountId: String!
  }

  extend type Mutation {
    createAccount(input: NewAccountInput!): NewAccountResponse!
    addUser(input: NewAccountUserInput!): Response!
    switchAccount(input: SwitchAccountInput!): Response!
  }
`;

export default Account;
