import cheerio from "cheerio";
import { withCatch } from "../../../utils";

const getStylesheets = async html => {
  const parseHTML = async content => {
    const stylesheets = [];
    const $ = cheerio.load(content);
    $("head")
      .find("link[href$='.css']")
      .each((_, el) => {
        const { href } = el.attribs;
        stylesheets.push(href);
      });

    return stylesheets;
  };

  const [error, list] = await withCatch(parseHTML(html));
  if (error) {
    throw new Error(error.message);
  }
  return list;
};

export { getStylesheets };
