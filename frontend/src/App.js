import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import { AuthProvider } from './AuthContext';
import EditProfile from './pages/EditProfile';
import Home from './pages/Home';
import Announcements from './pages/Announcements';
import Posts from './pages/Posts';
import AddProjects from './pages/AddProjects';
import AddResource from './pages/AddResource';
import './index.css';
import Spinner from './components/Spinner';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/spinner" element={<Spinner />} />

          <Route path="/app" element={<Home />}>
           <Route path="home" element={<Posts />} />
            <Route path="announcements" element={<Announcements />} />
            <Route path="editprofile" element={<EditProfile/>} />
            <Route path="addproject" element={<AddProjects />} />
            <Route path="addresource" element={<AddResource />} />
            <Route path="profile/:username?" element={<Profile />} />
            <Route path="editprofile" element={<EditProfile />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
