import { gql } from "apollo-server-express";

const Response = gql`
  type Response {
    ok: Boolean!
    errors: [Error!]
  }
`;

export default Response;
