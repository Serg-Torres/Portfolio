import React from "react";
import { Card, Collapse, Row, Col } from "antd";
import "../styles/Projects.css";
import NeetPlan from '../assets/images/NeetPlan.png';
import SSAC from '../assets/images/SSAC.png';
import YuGiOh from '../assets/images/YuGiOh.png';

const projectData = [
  {
    title: "Project 1",
    img: YuGiOh,
    description: "Detailed information about Project 1.",
  },
  {
    title: "Project 2",
    img: NeetPlan,
    description: "Detailed information about Project 2.",
  },
  {
    title: "Project 3",
    img: SSAC,
    description: "Detailed information about Project 3.",
  },
  {
    title: "Project 4",
    img: "https://via.placeholder.com/300",
    description: "Detailed information about Project 4.",
  },
  {
    title: "Project 5",
    img: "https://via.placeholder.com/300",
    description: "Detailed information about Project 5.",
  },
];

const Projects: React.FC = () => {
  return (
    <div className="projects-page">
      <Row gutter={[16, 16]} justify="center">
        {projectData.map((project, index) => (
          <Col xs={24} sm={24} md={20} lg={16} key={index}>
            <Card
              hoverable
              className="project-card"
              cover={
                <img
                  alt={project.title}
                  src={project.img}
                  style={{ objectFit: "cover", maxHeight: "200px" }}
                />
              }
            >
              <Collapse
                ghost
                items={[
                  {
                    key: "1",
                    label: project.title,
                    children: <p>{project.description}</p>,
                  },
                ]}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Projects;
