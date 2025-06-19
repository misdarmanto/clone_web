import React, { useState, useRef, useEffect } from "react";

export interface DropdownSearchOption {
  label: string;
  value: string | number;
}

interface DropdownSearchProps {
  options: DropdownSearchOption[];
  label?: string;
  value?: string | number;
  onChange: (value: string | number | any) => void;
  placeholder?: string;
}

const DropdownSearch: React.FC<DropdownSearchProps> = ({
  options,
  label,
  value,
  onChange,
  placeholder = "Pilih opsi...",
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedLabel = options.find((opt) => opt.value === value)?.label ?? "";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-full">
      {label && <label className="block font-medium mb-1">{label}</label>}
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full border border-gray-300 rounded px-3 py-2.5 bg-white text-sm cursor-pointer"
      >
        {selectedLabel || placeholder}
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full border border-gray-300 bg-white rounded shadow-md">
          <input
            type="text"
            className="w-full px-3 py-2 border-b border-gray-200 text-sm focus:outline-none"
            placeholder="Cari..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
          />
          <ul className="max-h-48 overflow-y-auto">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <li
                  key={`${index}-${option.value}`}
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                    setSearchTerm("");
                  }}
                  className="px-3 py-2 hover:bg-orange-100 text-sm cursor-pointer"
                >
                  {option.label}
                </li>
              ))
            ) : (
              <li className="px-3 py-2 text-sm text-gray-400">
                Tidak ditemukan
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownSearch;
