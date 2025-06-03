import type { Meta, StoryObj } from "@storybook/react";
import { InputField } from "./InputField";
import { type FieldError } from "react-hook-form";

const meta: Meta<typeof InputField> = {
  title: "Components/Form/InputField",
  component: InputField,
};

export default meta;

type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    label: "Username",
    placeholder: "Enter username",
    type: "text",
    // registration: {
    //   name: "username",
    //   onChange: () => {},
    //   onBlur: () => {},
    //   ref: () => {},
    // },
  },
};

export const WithError: Story = {
  args: {
    label: "Username",
    placeholder: "Enter username",
    type: "text",
    error: {
      type: "required",
      message: "This field is required",
    } as FieldError,
    // registration: {
    //   name: "username",
    //   onChange: () => {},
    //   onBlur: () => {},
    //   ref: () => {},
    // },
  },
};
