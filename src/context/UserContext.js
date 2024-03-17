import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [selectOption, setSelectOptions] = useState(false);
  const [setting, setSettings] = useState(false);
  const [notifications, setNotifications] = useState(false);

  const windowClose = () => {
    if(setting) setSettings(false);
    if(notifications) setNotifications(false);
  }

  const selectTodo = () => {
    windowClose();
    setSelectOptions(!selectOption);
  }

  const openSettings = () => {
    windowClose();
    setSettings(!setting);
  }

  const setNotificationAlerts = () => {
    windowClose();
    setNotifications(!notifications);
  }

  const values = { selectOption, windowClose,
    selectTodo, openSettings, notifications,
    setSettings, setting, setSelectOptions, setNotificationAlerts
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
