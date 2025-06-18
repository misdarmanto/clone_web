import type { Meta, StoryObj } from "@storybook/react";
import SearchableDropdown from "./SearchableDropdown";

const meta: Meta<typeof SearchableDropdown> = {
  title: "Components/SearchableDropdown",
  component: SearchableDropdown,
};

export default meta;

type Story = StoryObj<typeof SearchableDropdown>;

const opdOptions = [
  { label: "Dinas Pendidikan dan Kebudayaan", value: "pendidikan" },
  {
    label:
      "Dinas Lingkungan Hidup, Perumahan, Kawasan Permukiman, dan Pertanahan",
    value: "lingkungan",
  },
  { label: "Dinas Kesehatan", value: "kesehatan" },
  { label: "Dinas Perhubungan", value: "perhubungan" },
  { label: "Satuan Polisi Pamong Praja", value: "polpp" },
];

export const Default: Story = {
  args: {
    options: opdOptions,
    onChange: (value) => console.log("Selected:", value),
    placeholder: "Pilih OPD",
  },
};
