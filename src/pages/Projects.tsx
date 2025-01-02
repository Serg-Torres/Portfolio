import React from "react";
import { Card, Collapse, Row, Col } from "antd";
import "../styles/Projects.css";
import NeetPlan from '../assets/images/NeetPlan.png';
import SSAC from '../assets/images/SSAC.png';
import YuGiOh from '../assets/images/YuGiOh.png';
import CandidateSearch from '../assets/images/CandidateSearch.png';
import Chalkboard from '../assets/images/Chalkboard.png';

const projectData = [
  {
    title: "YuGiOh Deck Collection",
    img: YuGiOh,
    description: "This web app can help you organize your daily plans, get weather and other information, and it has room to grow to implement even more functionality to help you manage your life.",
    role: "Worked on setting up server-side files and routes while ensuring lenient-side files properly reflected server-side files. Ensuring that user would be able to login/logout and seamlessly switch between pages. Worked on client-side front-end development, ensuring mobile-first responsiveness while ensuring a sleek UI",
    link: "https://yu-gi-oh-deck-builder-usud.onrender.com",
  },
  {
    title: "NeetPlan",
    img: NeetPlan,
    description: "This web app can help you organize your daily plans, get weather and other information, and it has room to grow to implement even more functionality to help you manage your life.",
    role: "Worked on setting up server-side files and routes while ensuring lenient-side files properly reflected server-side files. Ensuring that user would be able to login/logout and seamlessly switch between pages",
    link: "https://neetplan.onrender.com",
  },
  {
    title: "Snuggle Squad Adoption Agency",
    img: SSAC,
    description: "This web app is supposed to mimic the way an Animal Shelter Adoption Agency works to some extent with adoptions. The user is able to select and view different pets and see information on them. After the user has selected the animal they'd like to 'adopt' they can then fill out their information to obtain a certificate of adoption",
    link: "https://animal-shelter-project1.onrender.com",
  },
  {
    title: "Candidate Search",
    img: CandidateSearch,
    description: "This web app is a candidate search application that calls the GitHub API and renders data in the browser. The user has the ability to approve/deny candidates and place them in a table to later look through them",
    link: "https://candidate-search-1-25vf.onrender.com",
  },
  // {
  //   title: "Helpertunity Chalkboard", 
  //   img: Chalkboard,
  //   description: "Detailed information about Project 5.",
  //   link: "https://d1dot1c0mu7zkw.cloudfront.net/Chalkboard_HTML.html",
  // },
];

const Projects: React.FC = () => {
  return (
    <div className="projects-page">
      <Row gutter={[16, 16]} justify="center">
        {projectData.map((project, index) => (
          <Col xs={24} sm={24} md={20} lg={16} key={index}>
            <div className='cardWrapper'>
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
                      label: (
                        <a
                          className="projectLink"
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.title}
                        </a>
                      ),
                      children:
                        <>
                          <p>{project.description}</p>
                          <p>{project.role}</p>
                        </>,
                    },
                  ]}
                />
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Projects;
