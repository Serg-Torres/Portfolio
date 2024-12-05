import React, { useState } from 'react';
import { Menu, Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="navbar-container">
      {/* Left Section: Sandwich Button */}
      <div className="navbar-left">
        <Button
          type="text"
          icon={<MenuOutlined className="hamburger-icon" />}
          onClick={toggleDrawer}
        />
      </div>

      {/* Right Section: Website Logo */}
      <div className="navbar-right">
        <h1 className="navbar-logo">Sergio Torres</h1>
      </div>

      {/* Drawer for Navigation */}
      <Drawer
        title="Navigation"
        placement="left"
        onClose={toggleDrawer}
        open={isDrawerOpen}
      >
        <Menu mode="vertical">
          <Menu.Item key="1">
            <a href="/">Home</a>
          </Menu.Item>
          <Menu.Item key="2">
            <a href="/portfolio">Portfolio</a>
          </Menu.Item>
          <Menu.Item key="3">
            <a href="/resume">Resume</a>
          </Menu.Item>
          <Menu.Item key="4">
            <a href="/projects">Projects</a>
          </Menu.Item>
          <Menu.Item key="5">
            <a href="/showreel">ShowReel</a>
          </Menu.Item>
        </Menu>
      </Drawer>
    </div>
  );
};

export default Navbar;
