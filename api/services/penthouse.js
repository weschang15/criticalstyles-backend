import penthouse from "penthouse";
import puppeteer from "puppeteer";
import getCSS from "./utils/getCSS";

const service = async url => {
  const cssString = await getCSS(url);
  const browser = puppeteer.launch({
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage"
    ],
    defaultViewport: {
      width: 1300,
      height: 900
    }
  });

  return penthouse({
    url,
    cssString,
    puppeteer: {
      getBrowser: () => browser
    }
  });
};

export default service;
