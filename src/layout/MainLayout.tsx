import React from 'react';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Layout className="layout">
      <Header className="header">
        <div className="logo">Movie App</div>
      </Header>
      <Content style={{ padding: '0 50px', marginTop: '20px' }}>
        <div className="site-layout-content">{children}</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Movie App ©2024 Created by Serhat</Footer>
    </Layout>
  );
};

export default MainLayout;
