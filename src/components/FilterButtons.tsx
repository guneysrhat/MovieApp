import React from 'react';
import { Button, Dropdown, Menu, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';

interface FilterButtonsProps {
  selectedYear: string | undefined;
  selectedType: string | undefined;
  onYearChange: (year: string) => void;
  onTypeChange: (type: string) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ selectedYear, selectedType, onYearChange, onTypeChange }) => {
  const yearMenu = (
    <Menu>
      <Menu.Item key="2022" onClick={() => onYearChange('2022')}>
        2022
      </Menu.Item>
      <Menu.Item key="2021" onClick={() => onYearChange('2021')}>
        2021
      </Menu.Item>
      <Menu.Item key="2020" onClick={() => onYearChange('2020')}>
        2020
      </Menu.Item>
      <Menu.Item key="2019" onClick={() => onYearChange('2019')}>
        2019
      </Menu.Item>
      <Menu.Item key="2018" onClick={() => onYearChange('2018')}>
        2018
      </Menu.Item>
      <Menu.Item key="" onClick={() => onYearChange('')}>
        Hepsi
      </Menu.Item>
    </Menu>
  );

  const typeMenu = (
    <Menu>
      <Menu.Item key="movie" onClick={() => onTypeChange('movie')}>
        Film
      </Menu.Item>
      <Menu.Item key="series" onClick={() => onTypeChange('series')}>
        Dizi
      </Menu.Item>
      <Menu.Item key="episode" onClick={() => onTypeChange('episode')}>
        Bölüm
      </Menu.Item>
      <Menu.Item key="game" onClick={() => onTypeChange('game')}>
        Oyun
      </Menu.Item>
      <Menu.Item key="" onClick={() => onTypeChange('')}>
        Hepsi
      </Menu.Item>
    </Menu>
  );

  return (
    <div style={{ marginBottom: '20px' }}>
      <Space>
        <Dropdown overlay={yearMenu} trigger={['click']}>
          <Button>
            Yıl: {selectedYear || 'Seçin'} <DownOutlined />
          </Button>
        </Dropdown>
        <Dropdown overlay={typeMenu} trigger={['click']}>
          <Button>
            Tür: {selectedType || 'Seçin'} <DownOutlined />
          </Button>
        </Dropdown>
      </Space>
    </div>
  );
};

export default FilterButtons;
