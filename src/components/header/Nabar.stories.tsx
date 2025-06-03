import type { Meta, StoryObj } from "@storybook/react";
import Navbar from "./Navbar";

const meta: Meta<typeof Navbar> = {
  title: "Layout/Navbar",
  component: Navbar,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Navbar>;

const sampleMenu = [
  { label: "Beranda", href: "/" },
  { label: "Dataset", href: "/datasets" },
  { label: "Sektoral", href: "/sectorals" },
  { label: "Urusan", href: "/urusan" },
  { label: "Organisasi", href: "/organizations" },
  { label: "Publikasi", href: "/publications" },
  { label: "Kontak", href: "/contacts" },
];

export const Default: Story = {
  args: {
    menuItems: sampleMenu,
  },
};
