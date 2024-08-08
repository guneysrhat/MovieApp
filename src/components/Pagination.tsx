import React from 'react';
import { Pagination } from 'antd';

interface PaginationProps {
  total: number;
  current: number;
  onChange: (page: number) => void;
}

const CustomPagination: React.FC<PaginationProps> = ({ total, current, onChange }) => {
  return (
    <div style={{ marginTop: '20px' }}>
      <Pagination
      total={total}
      current={current}
      pageSize={10}
      onChange={onChange}
      
    />
    </div>
    
  );
}

export default CustomPagination;
