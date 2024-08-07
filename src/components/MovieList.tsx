import React, { useEffect, useState } from 'react';
import { Table, Input, Button, Layout, Pagination, Spin, Alert } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../store/movieSlice';
import { RootState, AppDispatch } from '../store';
import { Link } from 'react-router-dom';

const { Header, Content } = Layout;

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
      title: 'IMDb ID',
      dataIndex: 'imdbID',
      key: 'imdbID',
    },
  ];

  return (
    <Layout className="layout">
      <Header className="header">
        <div className="logo">Movie App</div>
      </Header>
      <Content style={{ padding: '0 50px', marginTop: '20px' }}>
        <div className="site-layout-content">
          <Input.Search
            placeholder="Film arayın..."
            onSearch={handleSearch}
            onChange={(e) => setQuery(e.target.value)}
            style={{ marginBottom: '20px', width: '300px' }}
          />
          <div style={{ marginBottom: '20px' }}>
            <Button onClick={() => setYear('2022')}>2022</Button>
            <Button onClick={() => setYear('2021')}>2021</Button>
            <Button onClick={() => setType('movie')}>Film</Button>
            <Button onClick={() => setType('series')}>Dizi</Button>
            <Button onClick={() => setType('episode')}>Bölüm</Button>
          </div>
          {status === 'loading' ? (
            <Spin size="large" />
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
              <Pagination
                current={page}
                onChange={handlePageChange}
                total={movies.length * 10} // example value, you should calculate this based on total results
                pageSize={10}
                style={{ marginTop: '20px' }}
              />
            </>
          )}
        </div>
      </Content>
    </Layout>
  );
};

export default MovieList;
