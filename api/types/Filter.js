import { gql } from "apollo-server-express";

const Filter = gql`
  input Filter {
    limit: Int
    skip: Int!
  }
`;

export default Filter;
