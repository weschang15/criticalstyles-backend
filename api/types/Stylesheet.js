import { gql } from "apollo-server-express";

const Stylesheet = gql`
  type Stylesheet {
    content: String!
    viewport: Viewport!
  }

  type CreateStylesheetResponse {
    ok: Boolean!
    errors: [Error!]
    stylesheet: Stylesheet
  }

  extend type Mutation {
    createStylesheet: CreateStylesheetResponse!
  }
`;

export default Stylesheet;
