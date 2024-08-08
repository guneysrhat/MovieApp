import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieById } from '../store/movieSlice';
import { RootState, AppDispatch } from '../store';
import { Button, Spin, Alert, Card, Typography, Row, Col } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

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
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <Spin size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <Alert message="Hata" description={error} type="error" showIcon />
      </div>
    );
  }

  if (!selectedMovie) {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <div>Film bulunamadı.</div>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <Button
        onClick={handleBack}
        icon={<ArrowLeftOutlined />}
        style={{ marginBottom: '20px', backgroundColor: '#1890ff', color: '#fff', borderColor: '#1890ff' }}
      >
        Geri Dön
      </Button>
      <Card
        style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px',display: 'flex', alignItems: 'center' }}
        cover={<img alt={selectedMovie.Title} src={selectedMovie.Poster} style={{ width: '100%', height: 'auto' }} />}
      >
        <Title level={2}>{selectedMovie.Title}</Title>
        <Paragraph><strong>Yıl:</strong> {selectedMovie.Year}</Paragraph>
        <Paragraph><strong>Özet:</strong> {selectedMovie.Plot}</Paragraph>
      </Card>
    </div>
  );
};

export default MovieDetail;
