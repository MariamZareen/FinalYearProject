import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState(null);

  const loginHandler = (userName) => {
    setUsername(userName);
  };

//  console.log(username,"this is from autentication page")
  return (
    <AuthContext.Provider value={{ username, loginHandler }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);