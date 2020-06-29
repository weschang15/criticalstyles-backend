import { gql } from "apollo-server-express";

const Token = gql`
  type Token {
    _id: ID!
    secret: String!
    createdAt: Date!
  }

  type TokensPayload {
    ok: Boolean!
    documents: [Token!]
    errors: [Error!]
    queryInfo: QueryInfo!
  }

  input GetTokensInput {
    skip: Int!
    limit: Int
  }

  extend type Query {
    tokens(input: GetTokensInput!): TokensPayload!
  }

  type TokenPayload {
    ok: Boolean!
    token: Token
    errors: [Error!]
  }

  input DeleteTokenInput {
    _id: String!
  }

  extend type Mutation {
    createToken: TokenPayload!
    deleteToken(input: DeleteTokenInput!): Response!
  }
`;

export default Token;
