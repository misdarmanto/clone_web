import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { FaCheck, FaArrowRight } from "react-icons/fa";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"], // enables autodocs if supported
  argTypes: {
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "contained",
    color: "primary",
  },
};

export const Outlined: Story = {
  args: {
    children: "Outlined Button",
    variant: "outlined",
    color: "primary",
  },
};

export const WithStartIcon: Story = {
  args: {
    children: "Start Icon",
    startIcon: <FaCheck />,
    color: "success",
    variant: "contained",
  },
};

export const WithEndIcon: Story = {
  args: {
    children: "Next",
    endIcon: <FaArrowRight />,
    color: "info",
    variant: "text",
  },
};

export const FullWidth: Story = {
  args: {
    children: "Full Width",
    fullWidth: true,
    color: "secondary",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
    color: "danger",
  },
};
