import { AiOutlineHome } from "react-icons/ai";

import {  RiUserSettingsLine } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import { Box } from "@mantine/core";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
const url = "https://eventstaging.skoodos.com/api/logout"
export default function Nav() {
  const navigate = useNavigate()
 
  const handleLogout = async (e) => {
    e.preventDefault()
    let token = await AsyncStorage.getItem('token');
    AsyncStorage.setItem('token', '')
    window.location.reload();
    console.log("hellow", token)
    try {
      const response = await axios.post(url, {
      }, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Authorization': `Bearer ${token}`,
        }
      });
      console.log(response)
      AsyncStorage.setItem('token', '')
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Box sx={() => ({

        // background: "rgb(0,0,0,0.3)",
        background:"red",
        // width: "max-content",
       
        padding: "1rem 2rem",
        zIndex: 2,
        position: "fixed",
        left: "50%",
        transform: "translateX(-50%)",
        // bottom: "2rem",
        display: "flex",
        gap: "1.5rem",
        borderRadius: "3rem",
        // backdropFilter: "blur(15px)"
      })}>



        <NavLink to="/">

          <AiOutlineHome size={30} onClick={() => navigate("/")} />
        </NavLink>

        <NavLink to="/allsettings">
          <RiUserSettingsLine size={30} onClick={() => navigate("/allsettings")} />
        </NavLink>

        <NavLink onClick={handleLogout}>

          <MdLogout size={30} />
        </NavLink>


      </Box>
    </>


  );
}
