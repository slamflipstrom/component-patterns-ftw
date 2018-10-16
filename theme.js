import { future } from "mdx-deck/themes"
import tomorrow from "react-syntax-highlighter/styles/prism/tomorrow"

export default {
  ...future,
  h3: {
    marginTop: "30px"
  },
  li: {
    fontSize: "34px"
  },
  prism: {
    style: tomorrow
  }
}
