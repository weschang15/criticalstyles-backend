import { gql } from "apollo-server-express";

const Stylesheet = gql`
  type Stylesheet {
    styles: String!
    viewport: Viewport!
  }

  type CreateStylesheetResponse {
    ok: Boolean!
    errors: [Error!]
    stylesheet: Stylesheet
  }

  input StylesheetInput {
    url: String!
  }

  extend type Mutation {
    createStylesheet(input: StylesheetInput!): CreateStylesheetResponse!
  }
`;

export default Stylesheet;
