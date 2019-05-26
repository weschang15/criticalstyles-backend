import { gql } from "apollo-server-express";

const Error = gql`
  type Error {
    path: String!
    message: String!
  }
`;

export default Error;
