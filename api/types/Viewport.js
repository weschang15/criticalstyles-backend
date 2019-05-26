import { gql } from "apollo-server-express";

const Viewport = gql`
  type Viewport {
    height: Int!
    width: Int!
  }
`;

export default Viewport;
