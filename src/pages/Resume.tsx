import React from 'react';
import { Layout, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import '../styles/Resume.css'
const { Content } = Layout;

const Resume = () => {
  return (
    <Layout className = 'layoutStyle'>
      <Content className = 'contentStyle'>
        <div className = 'buttonDiv'>
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
        <div className = 'resumeDiv'>
          <iframe
            src="https://drive.google.com/file/d/14SQw423qcNcnwCwtQnLeuEv3MzZosRty/preview"
            className = 'resumeIFrame'
            title="Resume Preview"
          ></iframe>
        </div>
      </Content>
    </Layout>
  );
};

export default Resume;
