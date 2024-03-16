import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [selectOption, setSelectOptions] = useState(false);
  const [setting, setSettings] = useState(false);

  const selectTodo = () => {
    if(setting) setSettings(false);
    setSelectOptions(!selectOption)
  }
  
  const openSettings = () => setSettings(!setting);

  const values = { selectOption, 
    selectTodo, openSettings, 
    setSettings, setting, setSelectOptions
  }

  return (
    <UserContext.Provider value={values}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};

export { UserProvider, useUserContext };
