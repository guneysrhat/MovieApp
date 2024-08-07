import React from 'react';
import { Pagination } from 'antd';

interface PaginationProps {
  total: number;
  current: number;
  onChange: (page: number) => void;
}

const CustomPagination: React.FC<PaginationProps> = ({ total, current, onChange }) => {
  return (
    <Pagination
      total={total}
      current={current}
      pageSize={10}
      onChange={onChange}
    />
  );
}

export default CustomPagination;
