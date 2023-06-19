import { Center, Flex, List, Navbar,  createStyles, Drawer, Box, Burger, Divider,  } from "@mantine/core";
import {  useState } from "react";
import { Link, NavLink, useNavigate, } from "react-router-dom";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
const url = "https://eventstaging.skoodos.com/api/logout"
export default function NavBar() {
    const navigate = useNavigate();
    
    const [open, setOpen] = useState(false);
    const toggleDrawer = () => {
        setOpen((prev) => !prev);
    };
    const { classes } = useStyle()
   
    // Drawer function 
    const handleCloseDrawer = () => {
        setOpen((prev) => !prev);
    };
    const handleLogout = async (e) => {
        e.preventDefault()
        window.location.reload();
        let token = await AsyncStorage.getItem('token');
        AsyncStorage.setItem('token', '')
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

    const profileSetting = () => {
        // window.location.href = '/allsettings';
        navigate("/allsettings")
    }
    

    
    return (

        <>
            <Navbar className={classes.navbar}>
              
                <Box style={{ display: "flex", height: "100%", }}>
                  
                    <Box className={classes.menubar}>
                        <Center>
                            <List>
                                <Flex className={classes.navcollection}>
                                    <List.Item sx={(theme) => ({ listStyle: "none" })}>
                                        <NavLink to="/" className={classes.navitem}>Home </NavLink>
                                    </List.Item>
                                    <List.Item sx={(theme) => ({ listStyle: "none" })} onClick={profileSetting}>
                                        <NavLink  className={classes.navitem}>ProfileSetting</NavLink>
                                    </List.Item>
                                    <List.Item sx={(theme) => ({ listStyle: "none" })} onClick={handleLogout}>
                                        <NavLink  className={classes.navitem}>Logout </NavLink>
                                    </List.Item>
                                   

                                </Flex>
                            </List>
                        </Center>
                    </Box>
                   
                    <Box className={classes.togalBox}>
                        <Center >
                            <Box>
                                <Flex className={classes.togalBox2}>
                                    <Burger
                                        opened={open}
                                        onClick={() => setOpen((o) => !o)}
                              
                                         />
                                    <Drawer.Root
                                        opened={open}
                                        onClose={toggleDrawer}
                                        // size={350}
                                        overlayprops={{ opacity: 0.4 }}>
                                        <Drawer.Content style={{ backgroundColor: "#FF5829", }}>
                                            <Drawer.Header style={{ backgroundColor: "#FF5829" }}>
                                                <Drawer.CloseButton size="lg" style={{ color: "black", background: "none" }} />
                                            </Drawer.Header>
                                            <Drawer.Body >
                                                <Center>
                                                    <List style={{ listStyle: "none", textAlign:"center" }}>
                                                        <List.Item>
                                                            <NavLink to="/" className={classes.drawerItem} onClick={handleCloseDrawer} > Home</NavLink>
                                                        </List.Item>
                                                        <Divider mb="xs" mt="xs" />
                                                        <List.Item onClick={profileSetting}>
                                                            <NavLink className={classes.drawerItem} onClick={handleCloseDrawer}> Profile Setting</NavLink>
                                                        </List.Item>
                                                        <Divider mb="xs" mt="xs" />
                                                        <List.Item component={Link} onClick={handleLogout}>
                                                            <NavLink className={classes.drawerItem} onClick={handleCloseDrawer}>Log Out</NavLink>

                                                        </List.Item>
                                                    </List>
                                                </Center>

                                            </Drawer.Body>
                                        </Drawer.Content>
                                    </Drawer.Root>
                                </Flex>
                            </Box>
                        </Center>
                    </Box>
                  
                </Box >
            </Navbar >
        </>
    );
}

const useStyle = createStyles((theme) => ({
    navbar: {
        background: "#d0f23d",
        color: "#fff",
        height: "10%",
        top: 0,
        position: "sticky",
        zIndex: 3

    },
    menubar: {
        height: "100%", width: "100%",
        '@media (max-width: 768px)': {
            display: "none",

        },
    },
    logoBox: {
        width: "20%",
        // background: "red",
        listStyle: "none",

    }, logoBox2: {
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        height: "10vh",

    },
    logo: {
        color:"black",
        cursor: "pointer",
        listStyle: "none",
        textDecoration: "none",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontSize: "30px",
        fontWeight: 700,
        '@media (max-width: 768px)': {
            marginLeft: "50px"
        },
    },

    navitem: {
        cursor: "pointer",
        listStyle: "none",
        textDecoration: "none",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "black",
        fontSize: 20,

        "&:hover": {
            color: "#FF5829"
        },
    },

    drawerItem: {

        listStyle: "none",
        textDecoration: "none",
        padding: `10px`,
        color: "black",
        fontSize: "18px",
      
    },
    navcollection: {
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        height: "10vh",
        gap: "40px",
        width: "80%",
        margin: 0,
        padding: 0,
    },
    quote: {
        width: "20%",
        background: "#d0f23d",
        "&:hover": {
            cursor: "pointer"
        },
        '@media (max-width: 768px)': {
            display: "none"
        },
    },
    headerBox: {
        background: "#ff5829",
        listStyle: "none",
        display: "none",
        '@media (max-width: 768px)': {
            display: "block"
        },
    },
    headerBox2: {
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
    },
    headerBox3: {
        listStyle: "none",
        textDecoration: "none",
        fontSize: "14px",
        fontWeight: 700,
        color: "#fff",
    },
    togalBox: {
        width: "20%",
        display: "none",
        listStyle: "none",
        '@media (max-width: 768px)': {
            display: "block",
        },
    },
    togalBox2: {
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        height: "10vh",
        position: "absolute",
        // background :"green",

        right: "10px",

    },


    quoteBox2: {
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        height: "10vh",
        "&:hover": {
            cursor: "pointer",
        }
    },
}))