import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from '../components/MovieList';
import MovieDetail from '../components/MovieDetail';
import MainLayout from '../layout/MainLayout';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default AppRouter;
