import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../lib";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: "#1677FF",
    children: "徽章",
  },
};
