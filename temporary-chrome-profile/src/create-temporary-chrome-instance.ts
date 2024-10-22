import { runAppleScript } from "@raycast/utils";
import { showHUD } from "@raycast/api";

export default async function Command() {
  // eslint-disable-next-line no-useless-escape
  const res = await runAppleScript(`
    set profilePath to do shell script "TEMP_DIR=$(mktemp -d) && touch $TEMP_DIR'/First Run' && echo $TEMP_DIR"

    do shell script "open -n -a 'Google Chrome' --args --user-data-dir=" & profilePath
    `);
  await showHUD(res);
}
