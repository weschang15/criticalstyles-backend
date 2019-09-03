import { Page } from "../../../api/models";
import { cleanCSS, penthouse } from "../../../api/services";

async function handleProcess({ pageId, pageUrl, viewport }) {
  const { styles, stats } = cleanCSS(await penthouse(pageUrl, viewport));

  await Page.findByIdAndUpdate(pageId, {
    stylesheet: { styles, stats }
  });

  return pageId;
}

function process({ data }) {
  return handleProcess(data);
}

export default process;
