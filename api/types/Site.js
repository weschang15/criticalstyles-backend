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

  input GetSiteInput {
    slug: String!
  }

  type SitesResponse {
    ok: Boolean!
    errors: [Error!]
    documents: [Site!]
    queryInfo: QueryInfo
  }

  extend type Query {
    sites(filter: Filter): SitesResponse!
    getSite(input: GetSiteInput!): SiteReponse!
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
