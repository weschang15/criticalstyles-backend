import { gql } from "apollo-server-express";

const Stylesheet = gql`
  type Stylesheet {
    styles: String
    stats: StylesheetStats
  }

  type StylesheetResponse {
    ok: Boolean!
    errors: [Error!]
    stylesheet: Stylesheet
  }

  input NewUncategorizedStylesheetInput {
    url: String!
    viewport: [Int!]
  }

  extend type Mutation {
    createUncategorizedStylesheet(
      input: NewUncategorizedStylesheetInput!
    ): StylesheetResponse!
  }
`;

export default Stylesheet;
