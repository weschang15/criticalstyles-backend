/**
 * Helper function responsible for returning an object with necessary properties that satisfy the
 * PageInfo GQL type
 *
 * @param {number} totalRows the number of rows returned from a SELECT COUNT(*) query
 * @param {number} totalRowsPerPage the number of rows to limit a single page to
 * @return {Object} pageInfo
 */
const getQueryInfo = (totalRows, totalRowsPerPage = 10) => {
  return {
    total: totalRows,
    totalPages: Math.ceil(totalRows / totalRowsPerPage),
    hasNextPage: totalRows > totalRowsPerPage,
  };
};

export default getQueryInfo;
