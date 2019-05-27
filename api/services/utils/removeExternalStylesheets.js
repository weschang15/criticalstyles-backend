import url from "url";

/**
 * Remove all CSS urls that do not belong to the requested URL
 *
 * @param {string} requestedUrl User defined requested URL that is crawled for all stylesheets
 * @param {array} stylesheets Group of all stylesheets retrieved from crawling requested URL
 * @return {array} list of 1st party stylesheets
 */
const removeExternalStylesheets = (requestedUrl, stylesheets) => {
  const { hostname } = url.parse(requestedUrl);
  return stylesheets.filter(cssUrl => {
    const css = url.parse(cssUrl);
    return css.hostname === hostname;
  });
};

export { removeExternalStylesheets };
