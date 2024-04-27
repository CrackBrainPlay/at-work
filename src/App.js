import React from 'react';
import './App.css';
import style from './App.css';
// import UsersContainer from './components/Users/UsersContainer';
import { Routes, Route } from 'react-router-dom';
// import ProfilesContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Data from './components/Data/Data';

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <div className={style.content}>
        <Routes>
          {/* <Route path="/" element={<ProfilesContainer />} /> */}
          <Route path="/" element={<Data />} />
          {/* <Route path="Profile/:userId?" element={<ProfilesContainer />} /> */}
          {/* <Route path="Users/*" element={<UsersContainer />} /> */}
          <Route path="Data/*" element={<Data />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
