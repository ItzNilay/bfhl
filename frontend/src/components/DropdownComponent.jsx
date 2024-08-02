import React from 'react';
import Select from 'react-select';

const DropdownComponent = ({ setSelectedOptions }) => {
  const handleChange = (selected) => {
    setSelectedOptions(selected.map(option => option.value));
  };

  const dropdownOptions = [
    { value: 'numbers', label: 'Numbers' },
    { value: 'alphabets', label: 'Alphabets' },
    { value: 'highest_alphabet', label: 'Highest Alphabet' }
  ];

  return <Select isMulti options={dropdownOptions} onChange={handleChange} />;
};

export default DropdownComponent;
