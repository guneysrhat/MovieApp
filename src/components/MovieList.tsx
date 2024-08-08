import React, { useEffect, useState } from 'react';
import { Table, Spin, Alert } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../store/movieSlice';
import { RootState, AppDispatch } from '../store';
import { Link } from 'react-router-dom';
import FilterButtons from './FilterButtons';
import SearchBar from './SearchBar';
// import Pagination from './Pagination';
import CustomPagination from './Pagination';

const MovieList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const movies = useSelector((state: RootState) => state.movie.movies);
  const status = useSelector((state: RootState) => state.movie.status);
  const error = useSelector((state: RootState) => state.movie.error);
  const [query, setQuery] = useState('Pokemon');
  const [page, setPage] = useState(1);
  const [year, setYear] = useState<string | undefined>();
  const [type, setType] = useState<string | undefined>();

  useEffect(() => {
    dispatch(fetchMovies({ query, page, year, type }));
  }, [dispatch, query, page, year, type]);

  const handleSearch = () => {
    setPage(1);
    dispatch(fetchMovies({ query, page: 1, year, type }));
  };

  const handlePageChange = (page: number) => {
    setPage(page);
    dispatch(fetchMovies({ query, page, year, type }));
  };

  const columns = [
    {
      title: 'Film Adı',
      dataIndex: 'Title',
      key: 'Title',
      render: (text: string, record: any) => (
        <Link to={`/movie/${record.imdbID}`}>{text}</Link>
      ),
    },
    {
      title: 'Yıl',
      dataIndex: 'Year',
      key: 'Year',
    },
    {
      title: 'Tür',
      dataIndex: 'Type',
      key: 'Type',
    },
    {
      title: 'IMDb ID',
      dataIndex: 'imdbID',
      key: 'imdbID',
    },
  ];

  return (
    <>
      <SearchBar query={query} onSearch={handleSearch} onQueryChange={(e) => setQuery(e.target.value)} />
      
      <FilterButtons 
        selectedYear={year} 
        selectedType={type} 
        onYearChange={setYear} 
        onTypeChange={setType} 
      />
      {status === 'loading' ? (
        <Spin size="large"  />
      ) : error ? (
        <Alert message="Hata" description={error} type="error" showIcon />
      ) : (
        <>
          <Table
            dataSource={movies}
            columns={columns}
            rowKey="imdbID"
            pagination={false}
          />
          <CustomPagination total={50} current={page} onChange={handlePageChange}/>
        </>
      )}
    </>
  );
};

export default MovieList;
