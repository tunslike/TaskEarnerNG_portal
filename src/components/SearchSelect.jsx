import React, { useState, useEffect } from "react";
import JsonData from '../constants/BankList.json'

const SearchSelect = ({ onSelect }) => {
    
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    
    if (searchTerm.trim() === "") {
      setFilteredOptions([]);
      return;
    }
    // Filter JSON data based on search term
    const filtered = JsonData.filter((item) =>
      item.bank_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredOptions(filtered);
  }, [searchTerm]);

  const handleSelect = (item) => {
    setSelectedItem(item);
    setSearchTerm(item.bank_name); // Set input value to selected item
    setShowDropdown(false);
    onSelect(item); // Pass selected item to parent
  };

  return (
    <div className="relative w-[350px]">
      <input
        type="text"
        className="w-full mb-1 text-primaryBlue placeholder-[#a6a6a6] outline outline-[#e4e4e4] rounded-[0.7rem] p-3 text-[0.87rem]"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setShowDropdown(true)}
      />
      {showDropdown && filteredOptions.length > 0 && (
        <ul className="absolute w-full bg-white border text-[0.87rem] rounded-lg text-primaryBlue p-2 mt-1 shadow-lg max-h-40 overflow-y-auto">
          {filteredOptions.map((item) => (
            <li
              key={item.code}
              className="p-2 cursor-pointer hover:bg-blue-100"
              onClick={() => handleSelect(item)}
            >
              {item.bank_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchSelect;
