import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { loginSubscriber, logoutSubscriberBackend, registerSubcriber } from "../services/SubscriberService";
import { useDispatch } from "react-redux";
import { updateSubscriberData, logoutSubscriber } from "../store/subscriberSlice";
import { persistor } from '../store/store';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const dispatch = useDispatch();
  const [user, setUser] = useState(localStorage.getItem("token") || null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [subscriberId, setSubscriberId] = useState('');

  const [isAuthenticated, setIsAuthenticated] = useState(!!token);



  const login = async (credentials) => {

    try {
    
        // Call subscriber Service
        const response = await loginSubscriber(credentials);

        // update store
        dispatch(updateSubscriberData(response));

        const authToken = response.token;
        const refreshToken = response.refreshToken;

        localStorage.setItem("token", authToken);
        localStorage.setItem('pass', refreshToken);

        setSubscriberId(response.subscriberId);

        setToken(authToken);

        setUser(response);

        return true;

    } catch (error) {
      console.error("Login failed", error);
      return false;
    }

  };


  // register new subscriber
  const register = async (userData) => {

    try {

      const response = await registerSubcriber(userData);
      return response;

    } catch (error) {
      console.error("Registration failed", error);
      return false;
    }
  };


  // LOGOUT FUNCTION
  const logout = async () => {

    try {

      //logout function 
      const response = await logoutSubscriberBackend();

      dispatch(logoutSubscriber());
      persistor.purge();
   
      // local storage
      localStorage.removeItem("token");
      localStorage.removeItem("pass");

      setToken(null);
      setUser(null);

      delete axios.defaults.headers.common["Authorization"];

    }catch(error) {
      console.error('Unable to logout subcriber: ', error);
    }
  };

  // return
  return (
    <AuthContext.Provider value={{ user, subscriberId, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
