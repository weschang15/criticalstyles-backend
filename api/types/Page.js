import { gql } from "apollo-server-express";

const Page = gql`
  type Page {
    _id: ID!
    name: String!
    url: String!
    stylesheet: Stylesheet!
    createdAt: Date!
  }

  type PageResponse {
    ok: Boolean!
    errors: [Error!]
    page: Page
  }

  type GetPagesResponse {
    ok: Boolean!
    errors: [Error!]
    documents: [Page!]
    queryInfo: QueryInfo
  }

  input GetPagesInput {
    siteId: String!
    after: String
  }

  input NewPageInput {
    name: String!
    siteId: String!
    url: String!
    viewport: [Int!]
  }

  input PageAddedInput {
    accountId: String!
    siteId: String!
  }

  input PageUpdatedInput {
    pageId: String!
  }

  extend type Query {
    pages(input: GetPagesInput!): GetPagesResponse!
  }

  extend type Mutation {
    createPage(input: NewPageInput!): PageResponse!
  }

  extend type Subscription {
    pageAdded(input: PageAddedInput!): Page
    pageUpdated(input: PageUpdatedInput!): Page
  }
`;

export default Page;
