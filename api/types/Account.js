import { gql } from "apollo-server-express";

const Account = gql`
  type Account {
    _id: ID!
    name: String!
    owner: User!
    users(uf: Filter): [User!]!
    sites(sf: Filter): [Site!]!
  }

  input Filter {
    limit: Int
    after: String
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
    getAccount(input: AccountInput): AccountResponse!
  }

  type NewAccountResponse {
    ok: Boolean!
    errors: [Error!]
    account: Account
    owner: User
  }

  extend type Mutation {
    createAccount(input: NewAccountInput!): NewAccountResponse!
  }
`;

export default Account;
