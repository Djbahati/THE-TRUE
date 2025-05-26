import React from 'react';
import axios from 'axios';

const LogOut = () => {
  const handleLogOut = async () => {
    try {
      const response = await axios.post('http://localhost:5500/log_out');
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={handleLogOut}>Log Out</button>
  );
};

export default LogOut;