import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchMovies } from './store/movieSlice';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import './styles/App.css';
import { AppDispatch } from './store';

const App: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchMovies({ query: 'Pokemon', page: 1 }));
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
