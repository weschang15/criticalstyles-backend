import { gql } from "apollo-server-express";

const QueryInfo = gql`
  type QueryInfo {
    total: Int!
    totalPages: Int!
    hasNextPage: Boolean!
  }
`;

export default QueryInfo;
