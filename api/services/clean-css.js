import CleanCSS from "clean-css";

const service = styles =>
  new CleanCSS({
    level: { 2: { all: true, mergeSemantically: false } }
  }).minify(styles);

export default service;
