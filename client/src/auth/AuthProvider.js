import axios from "axios";
import { useContext, createContext, useState } from "react";
import { redirect } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");

  const loginAction = async (data) => {
    try {
      const res = await axios.post("http://localhost:8080/trainer/login", data);
      if (res.data) {
        setUser(res.data.user);
        setToken(res.data.token);
        localStorage.setItem("site", res.data.token);
        redirect("/");
        return;
      }
      throw new Error(res.message);
    } catch (err) {
      console.error(err);
    }
  };

  const logOut = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("site");
    redirect("/login");
  };

  return (
    <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
