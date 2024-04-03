import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../lib";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  parameters: {},
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    color: { control: "color" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
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
            <CarouselItem sizes={6}>1月</CarouselItem>
            <CarouselItem sizes={6}>2月</CarouselItem>
            <CarouselItem sizes={6}>3月</CarouselItem>
            <CarouselItem sizes={6}>4月</CarouselItem>
            <CarouselItem sizes={6}>5月</CarouselItem>
            <CarouselItem sizes={6}>6月</CarouselItem>
            <CarouselItem sizes={6}>7月</CarouselItem>
            <CarouselItem sizes={6}>8月</CarouselItem>
            <CarouselItem sizes={6}>9月</CarouselItem>
            <CarouselItem sizes={6}>10月</CarouselItem>
            <CarouselItem sizes={6}>11月</CarouselItem>
            <CarouselItem sizes={6}>12月</CarouselItem>
          </CarouselContent>
          <CarouselPrevious
            style={{
              backgroundColor: "#033360",
              color: "#6889AA",
            }}
          />
          <CarouselNext
            style={{
              backgroundColor: "#033360",
              color: "#6889AA",
            }}
          />
        </Carousel>
      </div>
    );
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  ...Template,
  args: {
    opts: {},
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
