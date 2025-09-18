import React, { createContext, useContext, useState } from 'react';

// interface AuthContextType {
//   isAuthenticated: boolean;
//   login: () => void;
//   logout: () => void;
// }
interface AuthContextType {
 isAuthenticated: boolean;
  user: { name: string; email: string } | null;
  signup: (name: string, email: string, password: string) => void;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

// export const AuthContext = createContext<AuthContextType | undefined>(undefined);
export const AuthContext = createContext<AuthContextType>({
    isAuthenticated: true,
    user: null,
    signup: () => {},
    login: () => true,
    logout: () => {},
});
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  const signup = (name: string, email: string, password: string) => {
    console.log(`User signed up with name: ${name}, email: ${email}`);
  };

  const login = (email: string, password: string) => {
    if (email && password) {
      setUser({ name: "Test User", email });
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};



// import React, { createContext, useState, ReactNode, useContext } from 'react';

// interface AuthContextType {
//   user: { name: string; email: string } | null;
//   signup: (name: string, email: string, password: string) => void;
//   login: (email: string, password: string) => boolean;
//   logout: () => void;
// }

// export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [user, setUser] = useState<{ name: string; email: string } | null>(null);
//   const [users, setUsers] = useState<{ name: string; email: string; password: string }[]>([]);

//   const signup = (name: string, email: string, password: string) => {
//     setUsers([...users, { name, email, password }]);
//   };

//   const login = (email: string, password: string) => {
//     const existingUser = users.find(u => u.email === email && u.password === password);
//     if (existingUser) {
//       setUser({ name: existingUser.name, email: existingUser.email });
//       return true;
//     }
//     return false;
//   };

//   const logout = () => setUser(null);

//   return (
//     <AuthContext.Provider value={{ user, signup, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) throw new Error('useAuth must be used within AuthProvider');
//   return context;
// };