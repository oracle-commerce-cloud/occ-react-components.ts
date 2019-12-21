import whyDidYouRender from "@welldone-software/why-did-you-render";
import React from "react";
import { render } from "react-dom";
import { App } from "./containers/App";

whyDidYouRender(React, {
  trackHooks: true,
  // logOnDifferentValues: true,
  onlyLogs: true,
  titleColor: "green",
  diffNameColor: "darkturquoise",
});

App.whyDidYouRender = true;

render(<App />, document.getElementById("root"));
