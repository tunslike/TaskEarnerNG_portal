import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setUser({ token });
    } else {
      delete axios.defaults.headers.common["Authorization"];
      setUser(null);
    }
  }, [token]);

  const login = async (credentials) => {
    try {
      const response = await axios.post("http://localhost:8080/api/auth/login", credentials);
      const authToken = response.data.token;

      localStorage.setItem("token", authToken);
      setToken(authToken);
      setUser({ token: authToken });

      return true;
    } catch (error) {
      console.error("Login failed", error);
      return false;
    }
  };

  const register = async (userData) => {
    try {
      await axios.post("http://localhost:8080/api/auth/register", userData);
      return true;
    } catch (error) {
      console.error("Registration failed", error);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    delete axios.defaults.headers.common["Authorization"];
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
