import { gql } from "apollo-server-express";

const Filter = gql`
  input Filter {
    limit: Int
    offset: Int!
  }
`;

export default Filter;
