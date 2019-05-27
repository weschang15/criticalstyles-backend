import fetch from "node-fetch";
import { withCatch } from "../../../utils";

const getHTML = async url => {
  const request = async url => {
    const response = await fetch(url);
    return await response.text();
  };

  const [error, html] = await withCatch(request(url));
  if (error) {
    throw new Error(error.message);
  }
  return html;
};

export { getHTML };
