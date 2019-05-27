import penthouse from "penthouse";
import getCSS from "./utils/getCSS";

const service = async url => {
  const cssString = await getCSS(url);

  return penthouse({
    url,
    cssString
  });
};

export default service;
