import { createContext, useState } from 'react';

interface IAuthContext {
  authenticated: boolean;
  login: () => void;
  logOut: () => void;
}

const defaultValue: IAuthContext = {
  authenticated: false,
  login: () => undefined,
  logOut: () => undefined,
};

const AuthContext = createContext<IAuthContext>(defaultValue);

export const AuthProvider: React.FC = (children: any) => {
  const [authenticated, setAuthenticated] = useState(
    defaultValue.authenticated
  );

  const login = () => {
    console.log('This is Log in ');
    setAuthenticated(true);
  };

  const logOut = () => {
    console.log('This is Log Out');
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ authenticated, login, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
