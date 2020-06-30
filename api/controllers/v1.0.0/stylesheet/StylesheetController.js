import { extractErrors } from "../../../../utils";
import { cleanCSS, penthouse } from "../../../services";

const StylesheetController = {};

StylesheetController.post = async function (req, res) {
  try {
    const { url } = req.body;
    if (!url) {
      throw new Error("Missing parameter: `url`");
    }

    const { styles, stats } = cleanCSS(await penthouse(url));

    return res
      .json({
        ok: !!styles,
        data: {
          stats,
          styles,
        },
      })
      .end();
  } catch (error) {
    return res.status(422).json({ ok: false, errors: extractErrors(error) });
  }
};

export { StylesheetController };
