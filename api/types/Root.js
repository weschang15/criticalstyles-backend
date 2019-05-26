import { gql } from "apollo-server-express";

const Root = gql`
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
  type Subscription {
    _empty: String
  }
`;

export default Root;
