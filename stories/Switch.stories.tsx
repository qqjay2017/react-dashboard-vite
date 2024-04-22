import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Switch } from "../src/lib";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    // layout: "centered",
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: "Switch",
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    children: "Switch",
  },
};

export const UnChecked: Story = {
  args: {
    checked: false,
    children: "Switch",
  },
};
