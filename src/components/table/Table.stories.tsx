import Table, { type TableColumn } from "./Table";
import { type Meta, type StoryObj } from "@storybook/react";

type DataType = {
  id: number;
  name: string;
  age: number;
  status: string;
};

const meta: Meta<typeof Table<DataType>> = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Table<DataType>>;

const sampleData: DataType[] = [
  { id: 1, name: "John Doe", age: 28, status: "Active" },
  { id: 2, name: "Jane Smith", age: 34, status: "Inactive" },
  { id: 3, name: "Alice Johnson", age: 23, status: "Active" },
];

const sampleColumns: TableColumn<DataType>[] = [
  { key: "id", title: "ID" },
  { key: "name", title: "Name" },
  { key: "age", title: "Age" },
  {
    key: "status",
    title: "Status",
    render: (value) => (
      <span
        className={`text-sm font-medium ${
          value === "Active" ? "text-green-600" : "text-red-600"
        }`}
      >
        {value}
      </span>
    ),
  },
];

export const Default: Story = {
  args: {
    data: sampleData,
    columns: sampleColumns,
    loading: false,
  },
};

export const Loading: Story = {
  args: {
    data: [],
    columns: sampleColumns,
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    data: [],
    columns: sampleColumns,
    loading: false,
    emptyMessage: "Tidak ada data ditemukan.",
  },
};
