import { gql } from "apollo-server-express";

const Site = gql`
  type Site {
    _id: ID!
    name: String!
    url: String!
    slug: String!
  }

  type NewSiteResponse {
    ok: Boolean!
    errors: [Error!]
    site: Site
  }

  input NewSiteInput {
    name: String!
    url: String!
    accountId: String!
  }

  extend type Mutation {
    createSite(input: NewSiteInput!): NewSiteResponse!
  }
`;

export default Site;
