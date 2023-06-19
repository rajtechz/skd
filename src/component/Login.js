import { ActionIcon, Anchor, Box, Button, Center, Grid, Text, TextInput, Loader, } from '@mantine/core'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { useState } from 'react'
// import Ep from "../component/assets/Ep.png"
// import s from "../component/assets/s.png"
// import gd from "../component/assets/gd.png"
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
export default function Login({ setToken }) {

    const Url = "https://eventstaging.skoodos.com/api/login"
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => setShowPassword((prev) => !prev);
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [mobileError, setMobileError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [loading, setLoading] = useState(true)
    const handleMobileNumberChange = (e) => {
        setPhone(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault()
        setPasswordError('');
        setMobileError('');
        if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters long.');
        }
        const mobileRegex = /^\d{10}$/;
        if (!phone.match(mobileRegex)) {
            setMobileError('Invalid mobile number format.');
        }
        if (password.length >= 6 && phone.match(mobileRegex)) {

            try {
                const response = await axios.post(Url, {
                    phone: phone,
                    password: password
                }, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                    }
                });

                setToken(response.data.data.token)
                AsyncStorage.setItem('token', response.data.data.token)
                setLoading(false);
                window.location.href = ("/")

                // console.log(loginToken)
                // console.log(response.data.success);
                // console.log(response.success)
            } catch (error) {
                console.error(error);
            }

        }
    }
    const forgetPassword = () => {
        window.location.href = '/forgetpassword';
    }
    if (loading) {
        <Center>
            <Loader color="#3498db" variant="bars" sx={(theme) => ({ height: "100vh", })} />
        </Center>
    }
    return (
        <>
            <Box sx={(theme) => ({ overflow: "hidden", height: "100vh", width: "100vw" })}>
                <Box
                    sx={(theme) => ({ height: "100vh", width: "100vw", position: "relative", })}>
                    <Box sx={(theme) => ({borderRadius: "10px", background: "#09a2e5", height: "80vh", width: "30vw", position: "absolute", left: "50%", top: "50%",transform: "translate(-50%, -50%)","@media(max-width : 768px)": {width: "100vw",height: "100vh",background: "#09a2e5"}})} >
                        <Center mt="80px">
                            <Box>
                                <Center mb={25}>
                                    <Text sx={(theme) => ({fontSize: "80px",fontWeight: "bolder"})}> <span >𝘴𝓴</span> <span style={{ color: "#f2ff1c" }}>ₒₒ</span><span>𝚍ₒ𝘴</span></Text>
                                </Center>
                                <Text sx={(theme) => ({color: "#fff",fontSize: "20px"})}>Welcome to <span > <b> Skoodos Event </b></span></Text>
                                <Center>
                                    <Box>
                                        <Text
                                            sx={(theme) => ({color: "#fff",fontSize: "20px"})}>
                                            <b>   Check In App! </b> <br />
                                        </Text>
                                    </Box>
                                </Center>
                                <Center mt="xs"sx={(theme) => ({color: "#f2ff1c",fontSize: "20px"})} ><Text>Log In With Password </Text>
                                </Center>
                            </Box>
                        </Center>
                        <Box mt="lg" mx="auto" component="form"onSubmit={handleSubmit}sx={(theme) => ({ width: "90%", height: "100%", })}>
                            <Grid>
                                <Grid.Col>
                                    <TextInput name='password'value={phone}onChange={handleMobileNumberChange}color='black'placeholder="Mobile"pattern="[0-9]{10}"size="lg"styles={{error: {color: 'pink',}}} />
                                    {mobileError && <Text style={{ color: "red" }}>{mobileError}</Text>}
                                </Grid.Col>
                                <Grid.Col pt="xl">
                                    <TextInput name='password'value={password}onChange={handlePasswordChange}size="lg" placeholder="Password"type={showPassword ? 'text' : 'password'}styles={{error: {color: 'pink',}}}rightSection={<ActionIcon onClick={toggleShowPassword}>{showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}</ActionIcon>} />
                                    {passwordError && <Text style={{ color: "red" }}>{passwordError}</Text>}
                                </Grid.Col>
                            </Grid>
                            <Center mt="xl">
                                <Box>
                                    <Anchor onClick={forgetPassword} sx={(theme) => ({color: "#f2ff1c",fontSize: "20px"})}>
                                        Forget Password
                                    </Anchor>
                                </Box>
                            </Center>
                            <Center mt="xl">
                                <Box>
                                    <Button radius="md" size='lg' type='submit' color="pink" px={50}>Submit</Button>
                                </Box>
                            </Center>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
