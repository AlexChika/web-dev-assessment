import { createContext, ReactNode, useContext, useState } from "react";

const AppContext = createContext<ContextType | null>(null);

function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserType | null>(null);

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
}

export default AuthProvider;
export const Store = () => useContext(AppContext);
