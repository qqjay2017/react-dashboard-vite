import type { Preview } from "@storybook/react";
import "../src/lib/globals.css";
import "./preview.css";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        "1080p": {
          name: "1080p",
          styles: {
            width: "1920px",
            height: "1080px",
          },
          type: "desktop",
        },
        "2k": {
          name: "2k",
          styles: {
            width: "2560px",
            height: "1440px",
          },
          type: "desktop",
        },

        // ...MINIMAL_VIEWPORTS,
      },
      defaultViewport: "1080p",
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
