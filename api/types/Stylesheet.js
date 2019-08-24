import { gql } from "apollo-server-express";

const Stylesheet = gql`
  type Stylesheet {
    styles: String!
    stats: StylesheetStats!
  }

  type CreateStylesheetResponse {
    ok: Boolean!
    errors: [Error!]
    stylesheet: Stylesheet
  }

  input NewStylesheetInput {
    siteId: String!
    url: String!
    viewport: [Int!]
  }

  extend type Mutation {
    createStylesheet(input: NewStylesheetInput!): CreateStylesheetResponse!
  }
`;

export default Stylesheet;
