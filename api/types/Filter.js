import { gql } from "apollo-server-express";

const Filter = gql`
  input Filter {
    limit: Int
    after: String
  }
`;

export default Filter;
