import React from 'react';
import { Layout, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const { Content } = Layout;

const Resume = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ padding: '20px', display: 'flex', flexDirection: 'column', backgroundColor: 'black', alignItems: 'center', position: 'relative' }}>
        <div style={{ textAlign: 'center', maxWidth: '600px', marginBottom: '20px', zIndex: 10, position: 'relative' }}>
          <Button
            type="primary"
            icon={<DownloadOutlined />}
            href="https://docs.google.com/document/d/1xxgyPrspM6toLFZccqoWaSs5sUpn45Sab9sp8LB1l-g/export?format=pdf"
            target="_blank"
            size="large"
          >
            Download Resume
          </Button>
        </div>
        <div style={{ textAlign: 'center', maxWidth: '1000px', width: '100%', display: 'flex', justifyContent: 'center' }}>
          <iframe
            src="https://drive.google.com/file/d/14SQw423qcNcnwCwtQnLeuEv3MzZosRty/preview"
            style={{ width: '100%', height: '1500px', border: 'none' }}
            title="Resume Preview"
          ></iframe>
        </div>
      </Content>
    </Layout>
  );
};

export default Resume;
