import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../store/movieSlice';
import { AppDispatch } from '../store';
import { Input } from 'antd';

const { Search } = Input;

const SearchBar: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [query, setQuery] = useState('Pokemon');

  const handleSearch = (value: string) => {
    setQuery(value);
    dispatch(fetchMovies({ query: value, page: 1 }));
  };

  return (
    <Search
      placeholder="Film ara"
      onSearch={handleSearch}
      defaultValue="Pokemon"
    />
  );
};

export default SearchBar;
