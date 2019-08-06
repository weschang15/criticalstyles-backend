import { gql } from "apollo-server-express";

const StylesheetInfo = gql`
  type StylesheetInfo {
    minifiedSize: Float!
    originalSize: Float!
    viewport: [Int!]!
  }
`;

export default StylesheetInfo;
