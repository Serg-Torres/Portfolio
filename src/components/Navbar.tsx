import React, { useState } from 'react';
import { Menu, Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // Define menu items
  const menuItems = [
    {
      key: '1',
      label: <a href="/">Home</a>,
    },
    {
      key: '2',
      label: <a href="/portfolio">Portfolio</a>,
    },
    {
      key: '3',
      label: <a href="/resume">Resume</a>,
    },
    {
      key: '4',
      label: <a href="/projects">Projects</a>,
    },
  ];

  return (
    <div className="navbar-container dark-theme">
      {/* Left Section: Sandwich Button */}
      <div className="navbar-left">
        <Button
          type="text"
          icon={<MenuOutlined className="hamburger-icon" />}
          onClick={toggleDrawer}
          className="drawer-toggle-button"
        />
      </div>

      {/* Right Section: Website Logo */}
      <div className="navbar-right">
        <h1 className="navbar-logo">Sergio Torres</h1>
      </div>

      {/* Drawer for Navigation */}
      <Drawer
        placement="left"
        onClose={toggleDrawer}
        open={isDrawerOpen}
        className="navbar-drawer"
      >
        <Menu mode="vertical" theme="dark" items={menuItems} className="navbar-menu" />
      </Drawer>
    </div>
  );
};

export default Navbar;
