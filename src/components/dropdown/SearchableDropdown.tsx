import React, { useState } from "react";

interface Option {
  label: string;
  value: string;
}

interface SearchableDropdownProps {
  options: Option[];
  onSelect: (value: Option) => void;
  placeholder?: string;
}

const SearchableDropdown: React.FC<SearchableDropdownProps> = ({
  options,
  onSelect,
  placeholder = "Pilih OPD",
}) => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [filtered, setFiltered] = useState<Option[]>(options);

  const handleSearch = (value: string) => {
    setSearch(value);
    setFiltered(
      options.filter((opt) =>
        opt.label.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleSelect = (option: Option) => {
    setSearch(option.label);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        placeholder={placeholder}
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
      />
      {isOpen && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-y-auto shadow">
          {filtered.length > 0 ? (
            filtered.map((opt) => (
              <li
                key={opt.value}
                onClick={() => handleSelect(opt)}
                className="p-2 hover:bg-gray-200 cursor-pointer"
              >
                {opt.label}
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-500">Tidak ada hasil</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchableDropdown;
