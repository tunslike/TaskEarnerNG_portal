import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { loginSubscriber, registerSubcriber } from "../services/SubscriberService";
import { useDispatch } from "react-redux";
import { updateSubscriberData } from "../store/subscriberSlice";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);


  const login = async (credentials) => {

    try {
    
        // Call subscriber Service
        const response = await loginSubscriber(credentials);

        // update store
        dispatch(updateSubscriberData(response));

        const authToken = response.token;

        localStorage.setItem("token", authToken);

        setToken(authToken);

        setUser(response);

        return true;

    } catch (error) {
      console.error("Login failed", error);
      return false;
    }

  };

  const register = async (userData) => {

    try {

      await registerSubcriber(userData);
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
