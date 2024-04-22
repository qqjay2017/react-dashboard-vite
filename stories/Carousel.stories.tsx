import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../src/ui";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  parameters: {},
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof Carousel>;

const Template: Story = {
  render: (args) => {
    return (
      <div
        style={{
          width: "400px",
          position: "relative",
        }}
      >
        <Carousel {...args}>
          <CarouselContent>
            <CarouselItem>1月</CarouselItem>
            <CarouselItem>2月</CarouselItem>
            <CarouselItem>3月</CarouselItem>
            <CarouselItem>4月</CarouselItem>
            <CarouselItem>5月</CarouselItem>
            <CarouselItem>6月</CarouselItem>
            <CarouselItem>7月</CarouselItem>
            <CarouselItem>8月</CarouselItem>
            <CarouselItem>9月</CarouselItem>
            <CarouselItem>10月</CarouselItem>
            <CarouselItem>11月</CarouselItem>
            <CarouselItem>12月</CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    );
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic: Story = {
  ...Template,
  args: {
    opts: {},
  },
};

export const Sizes: Story = {
  render: (args) => {
    return (
      <div
        style={{
          width: "400px",
          padding: 30,
          position: "relative",
        }}
      >
        <Carousel {...args}>
          <CarouselContent>
            <CarouselItem className=" basis-1/6">1月</CarouselItem>
            <CarouselItem className=" basis-1/6">2月</CarouselItem>
            <CarouselItem className=" basis-1/6">3月</CarouselItem>
            <CarouselItem className=" basis-1/6">4月</CarouselItem>
            <CarouselItem className=" basis-1/6">5月</CarouselItem>
            <CarouselItem className=" basis-1/6">6月</CarouselItem>
            <CarouselItem className=" basis-1/6">7月</CarouselItem>
            <CarouselItem className=" basis-1/6">8月</CarouselItem>
            <CarouselItem className=" basis-1/6">9月</CarouselItem>
            <CarouselItem className=" basis-1/6">10月</CarouselItem>
            <CarouselItem className=" basis-1/6">11月</CarouselItem>
            <CarouselItem className=" basis-1/6">12月</CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    );
  },
  args: {
    opts: {
      align: "start",
    },
  },
};

export const SlidesToScroll: Story = {
  ...Template,
  args: {
    opts: {
      loop: true,
      slidesToScroll: 6,
    },
  },
};

export const Orientation: Story = {
  ...Template,

  args: {
    orientation: "vertical",
    opts: {
      loop: true,
      slidesToScroll: 6,
    },
  },
};
