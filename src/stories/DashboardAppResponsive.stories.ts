import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, expect } from "@storybook/test";

import { DashboardAppResponsiveDemo } from "./DashboardAppResponsive";
import { DashboardAppResponsive } from "@/lib";

const meta = {
  title: "Kit/DashboardAppResponsive",
  component: DashboardAppResponsiveDemo,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DashboardAppResponsive>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const jfDarkThemeDemo: Story = {};
