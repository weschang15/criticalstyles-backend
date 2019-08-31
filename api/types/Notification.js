import { gql } from "apollo-server-express";

const Notification = gql`
  union Data = Page | Stylesheet

  type Notification {
    message: String!
    data: Data!
  }

  input NotificationAddedInput {
    accountId: String!
    userId: String!
  }

  extend type Subscription {
    notificationAdded(input: NotificationAddedInput!): Data
  }
`;

export default Notification;
