import { future, swiss } from "mdx-deck/themes"

import tomorrow from "react-syntax-highlighter/styles/prism/tomorrow"

export default {
  ...future,
  h3: {
    marginTop: "30px",
  },
  prism: {
    style: tomorrow,
  },
}
