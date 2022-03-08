import React, { useState, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Login from './Login';
import TableData from './TableData';
import Auth from '../utils/Auth';
import Api from '../utils/Api';
import ProtectedRoute from './ProtectedRoute';

function App() {

  const navigate = useNavigate()
  const [currentUser, setCurrentUser] = useState({});

  const [projectInfo, setProjectInfo] = useState([])

  // Login state 
  const [loggedIn, setLoggedIn] = useState(false);

  const [token, setToken] = useState(localStorage.getItem("jwt"));


  //Get user and projects information. 
  useEffect(() => {
    if (token) {
        getUserInfo(token)
        getProjectInfo(token)
    }
  }, [token])

  // Check if the user logged in and if user has a token in local storage, check if it is valid. 
  useEffect(() => {
    if (token) {
      setLoggedIn(true);
      navigate('/info');
    } else {
      setLoggedIn(false);
    }
  }, [token]);

  

  const getUserInfo = async (token) => {
    try {
      return await Api.getUserInfo(token).then(userData => {
        setCurrentUser(userData[0].personalDetails);
      })
    } catch (error) {
      console.log(error);
    }
  }

  const getProjectInfo = async (token) => {
    try {
      return await Api.getProjectInfo(token).then(res => {
        setProjectInfo(res);
      })
    } catch (error) {
      console.log(error);
    }
  }

  const handleLogin = (email, password) => {
    if (!email || !password) {
      return;
    }
    return Auth.authorize(email, password)
      .then((data) => {
        if (data) {
          setToken(data[0].token);
          setCurrentUser(data[0].personalDetails)
          setLoggedIn(!loggedIn);
          navigate('/info');
        }
      })
      .catch((err) => console.log(err));
  }

  const handleLogOut = () => {
    console.log("logged out");
    setLoggedIn(false);
    localStorage.removeItem("jwt");
    navigate("/");
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root" >
        <Routes>
          <Route path='/' element={<Login
            handleLogin={handleLogin}
            loggedIn={loggedIn}
          />}>
          </Route>
          <Route element={<ProtectedRoute loggedIn={loggedIn} />}>
            {
              currentUser && projectInfo.legnth !== 0 && <Route path='/info' element={<TableData
                onLogOut={handleLogOut}
                projectInfo={projectInfo}
              />} />
            }
          </Route>

        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
