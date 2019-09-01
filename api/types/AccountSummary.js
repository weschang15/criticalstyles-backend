import { gql } from "apollo-server-express";

const AccountSummary = gql`
  type AccountSummary {
    users: Int!
    sites: Int!
  }
`;

export default AccountSummary;
