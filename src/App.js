import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';


import ForgetPassword from './component/ForgetPassword';
import GuestDetail from './component/GuestDetail';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AllSettings from './component/AllSettings';
import AllDetails from './component/AllDetails';
import NavBar from './component/NavBar';
// import Login from './component/Login';
// import LogIn from './component/LogIn';
import LogInR from './component/logInR';


// import AttendeesList from './component/AttendeesList';
function App() {
  const [token, setToken] = useState("");
  // const navigate = useNavigate();
  useEffect(() => {
    const getToken = async () => {
      let token = await AsyncStorage.getItem('token');
      // console.log(token)
      setToken(token)
    }
    getToken()
  }, [])
  if (!token) {
    // return <Login setToken={setToken} />
    // return <LogIn setToken={setToken} />
    return <LogInR setToken={setToken} />
  }
  return (
    <>
      <BrowserRouter>
        <NavBar />
        {/* <Nav/> */}
        
        <Routes>
          <Route path='/guestdetail' element={<GuestDetail />} />
          <Route path='/allsettings' element={<AllSettings />} />
          <Route path='/forgetpassword' element={<ForgetPassword />} />
          <Route path='/' element={<AllDetails />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}
export default App;
 