import penthouse from "penthouse";
import puppeteer from "puppeteer";
import getCSS from "./utils/getCSS";

const service = async (url, viewport) => {
  const cssString = await getCSS(url);
  const browser = puppeteer.launch({
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage"
    ],
    defaultViewport: {
      width: viewport && viewport.length ? viewport[0] : 1300,
      height: viewport && viewport.length ? viewport[1] : 900
    }
  });

  return penthouse({
    url,
    cssString,
    width: viewport && viewport.length ? viewport[0] : 1300,
    height: viewport && viewport.length ? viewport[1] : 900,
    puppeteer: {
      getBrowser: () => browser
    }
  });
};

export default service;
