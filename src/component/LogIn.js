import { ActionIcon, Anchor, Box, Button, Center, Image, Grid, Text, TextInput, Loader, Flex, } from '@mantine/core'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { useState } from 'react'
import ep from "../component/assets/ep.png"
import gd from "../component/assets/gd.png"
import s from "../component/assets/s.png"
import k from "../component/assets/k.png"
import d from "../component/assets/d.png"
import o from "../component/assets/o.png"
import o2 from "../component/assets/o2.png"
import lyr from "../component/assets/lyr.png"

import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
export default function LogIn({ setToken }) {

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
            <Loader color="#3498db" variant="bars" sx={(theme) => ({
                height: "100vh",
            })} />
        </Center>
    }

    return (
        <>

            <Box sx={() => ({
                marginTop: "100px",
                marginBottom: "100px",
                "@media(max-width : 768px)": {
                    marginTop: "0px",
                    marginBottom: "0px",
                }
            })}>
                <Center >
                    <Box maw={500} sx={(theme) => ({ background: "#09a2e5", borderRadius: "10px", overflow: "hidden" })} >
                        <Center p={20} mt={-190} sx={() => ({
                            '@media (max-width: 600px)': {
                                marginTop: "-150px"
                            }
                        })}>

                            <Box m={10} sx={() => ({
                                backgroundImage: `url(${gd})`,
                                width: "300px",
                                height: "300px",
                                padding: "10px",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                overflow: "hidden",
                                '@media (max-width: 600px)': {
                                    width: "200px",
                                    height: "200px",
                                }
                            })}>

                               

                                <Box
                                    sx={() => ({

                                        backgroundImage: `url(${ep})`,
                                        width: "100%",
                                        height: "100%",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        overflow: "hidden",
                                        justifyContent: "center",
                                        alignItems: "center", 
                                        position: 'relative',
                                        display: "flex",
                                        '@media (max-width: 768px)': {
                                            width: "200px",
                                            height: "200px",
                                        },
                                    })}
                                >
                                    <Box>
                                    </Box>
                                    <Center>
                                        <Flex mt={150} maw={250} sx={() => ({
                                            gap: "2px",
                                            "@media(max-width : 768px)": {
                                                marginTop: "100px",
                                                maxWidth: "150px"
                                            }
                                        })}>
                                            <Box>

                                                <Image src={s} />
                                            </Box>
                                            <Box>

                                                <Image src={k} />
                                            </Box>
                                            <Box mt={-20}
                                                sx={() => ({

                                                    "@media(max-width : 768px)": {

                                                        marginTop: "-10px"
                                                    }
                                                })}

                                            >

                                                <Image src={o2} />
                                            </Box>
                                            <Box>

                                                <Image src={d} />
                                            </Box>
                                            <Box>

                                                <Image src={o} />
                                            </Box>
                                            <Box>

                                                <Image src={s} />
                                            </Box>
                                        </Flex>
                                    </Center>
                                </Box>

                            </Box>
                        </Center>
                        <Center >
                            <Box >
                                <Center>
                                    <Text sx={(theme) => ({
                                        color: "#fff",
                                        fontSize: "20px"
                                    })}>Welcome to <span > <b> Skoodos Event </b></span></Text>
                                </Center>
                                <Center>
                                    <Box>
                                        <Text sx={(theme) => ({ color: "#fff", fontSize: "20px" })}>
                                            <b>   Check In App! </b> <br />
                                        </Text>
                                    </Box>
                                </Center>
                                <Center mt="xs"
                                    sx={(theme) => ({ color: "#f2ff1c", fontSize: "20px" })} >
                                    <Text>Log In With Password </Text>
                                </Center>
                            </Box>
                        </Center>
                        <Box mt="lg" mx="auto" component="form"
                            onSubmit={handleSubmit}
                            sx={(theme) => ({ width: "90%", height: "100%", })}>
                            <Grid>
                                <Grid.Col>
                                    <TextInput
                                        name='password'
                                        value={phone}
                                        onChange={handleMobileNumberChange}
                                        color='black'
                                        placeholder="Mobile"
                                        pattern="[0-9]{10}"
                                        size="lg"
                                        styles={{
                                            error: {
                                                color: 'pink',
                                            }
                                        }} />
                                    {mobileError && <Text style={{ color: "red" }}>{mobileError}</Text>}
                                </Grid.Col>
                                <Grid.Col pt="xl">
                                    <TextInput
                                        name='password'
                                        value={password}
                                        onChange={handlePasswordChange}
                                        size="lg" placeholder="Password"
                                        type={showPassword ? 'text' : 'password'}
                                        styles={{
                                            error: {
                                                color: 'pink',
                                            }
                                        }}
                                        rightSection={
                                            <ActionIcon onClick={toggleShowPassword}>
                                                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                                            </ActionIcon>
                                        } />
                                    {passwordError && <Text style={{ color: "red" }}>{passwordError}</Text>}
                                </Grid.Col>
                            </Grid>
                            <Center mt="xl">
                                <Box>
                                    <Anchor onClick={forgetPassword} sx={(theme) => ({
                                        color: "#f2ff1c",
                                        fontSize: "20px"
                                    })}>
                                        Forget Password
                                    </Anchor>
                                </Box>
                            </Center>
                            <Center mt="xl" mb={10}>
                                <Box>
                                    <Button radius="md" size='lg' type='submit' color="pink" px={50}>Submit</Button>
                                </Box>
                            </Center>

                        </Box>


                        <img src={lyr} alt="Background Image" style={{ maxWidth: "100%", maxHeight: "100%", }} />

                    </Box>
                </Center>

            </Box >




        </>
    )
}
