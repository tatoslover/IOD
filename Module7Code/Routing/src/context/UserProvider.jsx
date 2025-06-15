import { useState } from "react";
import { UserContext } from "./UserContext";

export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({
    email: "",
    name: "",
  });

  const login = (email, name) => {
    setCurrentUser({ email, name });
  };

  const logout = () => {
    setCurrentUser({ email: "", name: "" });
  };

  return (
    <UserContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
