import React from 'react';
import { Input } from 'antd';

interface SearchBarProps {
  query: string;
  onSearch: () => void;
  onQueryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, onSearch, onQueryChange }) => {
  return (
    <div 
    style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}
    >
      <Input.Search
        placeholder="Film arayın..."
        value={query}
        onSearch={onSearch}
        onChange={onQueryChange}
        style={{ marginRight: '20px', width: '300px' }}
      />
    </div>
  );
};

export default SearchBar;
