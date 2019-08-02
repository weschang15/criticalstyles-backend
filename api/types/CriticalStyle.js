import { gql } from "apollo-server-express";

const CriticalStyle = gql`
  type CriticalStyle {
    styles: String!
    viewport: Viewport!
  }

  type CreateCriticalStyleResponse {
    ok: Boolean!
    errors: [Error!]
    stylesheet: CriticalStyle
  }

  input CriticalStyleInput {
    url: String!
    viewport: [Int!]
  }

  extend type Mutation {
    createCriticalStyle(
      input: CriticalStyleInput!
    ): CreateCriticalStyleResponse!
  }
`;

export default CriticalStyle;
