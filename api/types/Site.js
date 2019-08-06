import { gql } from "apollo-server-express";

const Site = gql`
  type Site {
    name: String!
    url: String!
  }

  extend type Response {
    site: Site!
  }

  input NewSiteInput {
    name: String!
    url: String!
  }

  extend type Mutation {
    createSite(input: NewSiteInput!): Response!
  }
`;

export default Site;
