import React, { useState, createContext, useContext } from 'react';
// import  from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserContext from './utils/user_context';

// const UserContext = createContext();
// const [main_user, setmain_user] = useState({});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <UserContext.Provider value={[main_user, setmain_user]}> */}
    <App />
    {/* </UserContext.Provider> */}
  </React.StrictMode>
);
