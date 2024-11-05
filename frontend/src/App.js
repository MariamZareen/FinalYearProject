import Home from './pages/Home';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import { AuthProvider } from './AuthContext';
import EditProfile from './pages/EditProfile';

function App() {
  return (
   <BrowserRouter>
     <AuthProvider>
      <Routes>
        <Route path='/' element={<Signin/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/profile/:id' element={<Profile/>}/>
        <Route path='/editprofile'  element={<EditProfile/>}/>
      </Routes>
      </AuthProvider>
   </BrowserRouter>
  );
}

export default App;
