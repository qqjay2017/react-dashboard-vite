import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../src/ui";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Destructive",
  },
};

export const CustomStyle: Story = {
  args: {
    style: {
      backgroundColor: "rgb(173, 250, 29)",
      color: "#000",
      fontWeight: 400,
    },
    children: "Custom",
  },
};
