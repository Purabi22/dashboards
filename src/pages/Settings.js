import React from 'react';
import ThemeSwitcher from '../Components/ThemeSwitcher';
import './Settings.css'; // Import the CSS file

const Settings = () => {
  return (
    <div className="settings-container"> {/* Apply the settings-container class */}
      <h1>Settings</h1>
      <ThemeSwitcher />
    </div>
  );
};

export default Settings;
