import axios from "axios";
import { useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", {});
  const [token, setToken] = useLocalStorage("token", "");
  const navigate = useNavigate();

  const loginAction = async (data) => {
    try {
      const res = await axios.post("http://localhost:8080/trainer/login", data);
      if (res.data) {
        setUser(res.data.user);
        setToken(res.data.token);
        navigate("/dashboard");
        return;
      }
      throw new Error(res.message);
    } catch (err) {
      console.error(err);
    }
  };

  const logOut = () => {
    setUser({});
    setToken("");
    navigate("/login", { replace: true });
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
