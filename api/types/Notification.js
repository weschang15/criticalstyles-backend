import { gql } from "apollo-server-express";

const Notification = gql`
  type Notification {
    message: String!
    data: String
  }

  input NotificationAddedInput {
    accountId: String!
  }

  extend type Subscription {
    notificationAdded(input: NotificationAddedInput!): Notification
  }
`;

export default Notification;
