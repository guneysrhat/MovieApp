import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieById } from '../store/movieSlice';
import { RootState, AppDispatch } from '../store';
import { Button, Layout, Spin, Alert } from 'antd';

const { Content } = Layout;

const MovieDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const selectedMovie = useSelector((state: RootState) => state.movie.selectedMovie);
  const status = useSelector((state: RootState) => state.movie.status);
  const error = useSelector((state: RootState) => state.movie.error);

  useEffect(() => {
    if (id) {
      dispatch(fetchMovieById(id));
    }
  }, [dispatch, id]);

  const handleBack = () => {
    navigate('/');
  };

  if (status === 'loading') {
    return <Spin size="large" />;
  }

  if (error) {
    return <Alert message="Hata" description={error} type="error" showIcon />;
  }

  if (!selectedMovie) {
    return <div>Film bulunamadı.</div>;
  }

  return (
    <Layout className="layout">
      <Content style={{ padding: '0 50px', marginTop: '20px' }}>
        <Button onClick={handleBack} style={{ marginBottom: '20px' }}>Geri Dön</Button>
        <div style={{ textAlign: 'center' }}>
          <h1>{selectedMovie.Title}</h1>
          <p>{selectedMovie.Year}</p>
          <p>{selectedMovie.Plot}</p>
          <img src={selectedMovie.Poster} alt={selectedMovie.Title} style={{ maxWidth: '100%' }} />
        </div>
      </Content>
    </Layout>
  );
};

export default MovieDetail;
