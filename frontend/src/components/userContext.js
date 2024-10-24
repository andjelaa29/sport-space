import React, { createContext, useState, useContext, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(localStorage.getItem('userId') || null); 
  const [userName, setUserName] = useState(localStorage.getItem('username') || null);

  useEffect(() => {
    if (userId) {
      localStorage.setItem('userId', userId);
    } else {
      localStorage.removeItem('userId');
    }

    if (userName) {
      localStorage.setItem('username', userName);
    } else {
      localStorage.removeItem('username');
    }
  }, [userId, userName]);

  const login = (id, name) => {
    setUserId(id);
    setUserName(name);
  };

  const logout = () => {
    setUserId(null);
    setUserName(null);
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
  };

  return (
    <UserContext.Provider value={{ userId, setUserId, userName, setUserName, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
