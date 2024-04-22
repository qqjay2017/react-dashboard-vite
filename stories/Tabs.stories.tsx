import type { Meta, StoryObj } from "@storybook/react";

import { Tabs, TabsList, TabsTrigger } from "../src/ui";
import React from "react";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {},
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    color: { control: "color" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof Tabs>;

const Template: Story = {
  render: (args) => {
    return (
      <div
        style={{
          width: "400px",
          position: "relative",
        }}
      >
        <Tabs {...args} defaultValue="bim">
          <TabsList>
            <TabsTrigger value="bim">模型</TabsTrigger>
            <TabsTrigger value="video">视频</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    );
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  ...Template,
  args: {},
};
