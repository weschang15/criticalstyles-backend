import { gql } from "apollo-server-express";

const Site = gql`
  type Site {
    _id: ID!
    name: String!
    url: String!
    slug: String!
    pages: [Page!]!
    createdAt: Date!
  }

  type SiteReponse {
    ok: Boolean!
    errors: [Error!]
    site: Site
  }

  input NewSiteInput {
    name: String!
  }

  type SitesResponse {
    ok: Boolean!
    errors: [Error!]
    documents: [Site!]
    queryInfo: QueryInfo
  }

  extend type Query {
    sites(filter: Filter): SitesResponse!
  }

  extend type Subscription {
    siteAdded(accountId: String!): Site
  }

  input DeleteSiteInput {
    _id: String!
  }

  extend type Mutation {
    createSite(input: NewSiteInput!): SiteReponse!
    deleteSite(input: DeleteSiteInput!): Response!
  }
`;

export default Site;
