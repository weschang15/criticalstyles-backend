import { gql } from "apollo-server-express";

const StylesheetStats = gql`
  type StylesheetStats {
    minifiedSize: Float
    originalSize: Float
  }
`;

export default StylesheetStats;
