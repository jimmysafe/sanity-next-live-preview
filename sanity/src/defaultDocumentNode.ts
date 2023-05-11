import { DefaultDocumentNodeResolver } from "sanity/desk";
import Iframe from "sanity-plugin-iframe-pane";
import os from "os";

export const defaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType, currentUser }
) => {
  const hostname = os.hostname();
  switch (schemaType) {
    case `article`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url:
              hostname === "localhost"
                ? `http://localhost:3000/api/preview`
                : `https://${hostname}/api/preview`,
          })
          .title("Preview"),
      ]);
    default:
      return S.document().views([S.view.form()]);
  }
};
