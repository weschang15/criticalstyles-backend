import fetch from "node-fetch";
import { removeDuplicates, withCatch } from "../../../utils";
import { getHTML } from "./getHTML";
import { getStylesheets } from "./getStylesheets";

/**
 * Retrieve stylesheets belonging to a specific URL. Will only retrieve CSS owned by website and not
 * 3rd party services
 *
 * @param {string} url Target URL to scrape for 1st party CSS
 * @return {array} list of CSS urls
 */
const getCSS = async url => {
  const getStylesheetUrls = async input =>
    removeDuplicates(await getStylesheets(await getHTML(input)));

  const getStylesheetPromises = stylesheets =>
    stylesheets.map(sheet => fetch(sheet).then(res => res.text()));

  const getStyles = async input => {
    const urls = await getStylesheetUrls(input);
    const styles = await Promise.all(getStylesheetPromises(urls));

    return styles.join("");
  };

  const [error, css] = await withCatch(getStyles(url));
  if (error) {
    throw new Error(error.message);
  }

  return css;
};

export default getCSS;
