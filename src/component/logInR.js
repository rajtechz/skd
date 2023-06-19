import { ActionIcon, Anchor, Box, Button, Center, Image, Grid, Text, TextInput, Loader, Flex, Card, } from '@mantine/core'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { useState } from 'react'
import sp from "../component/assets/sp.png"
import o2 from "../component/assets/o2.png"
import star from "../component/assets/star.png"
import vctr from "../component/assets/vctr.png"
import log from "../component/assets/log.png"


import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
export default function LogInR({ setToken }) {

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
        // window.location.href = '/forgetpassword';
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
            <Box sx={(theme) => ({ overflow: "hidden" })}>

                <Grid sx={() => ({
                    "@media(max-width:768px)": {
                        display: "none"
                    }

                })}>
                    <Grid.Col md={6} lg={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>


                        <Card maw={500} style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }} padding="3%" radius="md" >
                            <Center >
                                <Box  >

                                    <Flex gap="sm" ml="lg">
                                        <Box sx={() => ({ width: "30px", height: "30px", background: "#004b84", borderRadius: "50%", display: 'flex', justifyContent: 'center', alignItems: 'center', padding: "3%" })}>
                                            <Image src={o2} />
                                        </Box>
                                        <Box>
                                            <Text sx={(theme) => ({ fontSize: "20px", fontWeight: "bolder", color: "#004b84" })}>Log In</Text>
                                            <Text sx={(theme) => ({ fontSize: "16px" })}>Please enter the following</Text>
                                        </Box>
                                    </Flex>

                                    <Box mt="lg" mx="auto" component="form" onSubmit={handleSubmit} sx={(theme) => ({ width: "90%", height: "100%", })}>
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

                                                        <ActionIcon
                                                            onClick={toggleShowPassword}
                                                            sx={{
                                                                fontSize: '24px',
                                                            }}
                                                        >
                                                            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                                                        </ActionIcon>
                                                    } />
                                                {passwordError && <Text style={{ color: "red" }}>{passwordError}</Text>}
                                            </Grid.Col>
                                        </Grid>
                                        <Button type='submit' mt="xl" size='lg' style={{ width: '100%', background: "#004b84", borderRadius: 0 }}>
                                            Login
                                        </Button>
                                        <Center mt="xl">
                                            <Box>
                                                <Anchor onClick={forgetPassword} sx={(theme) => ({
                                                    color: "black",
                                                    fontSize: "20px"
                                                })}>
                                                    Forget Password
                                                </Anchor>
                                            </Box>
                                        </Center>


                                    </Box>



                                </Box>
                            </Center>

                        </Card >
                    </Grid.Col>
                    <Grid.Col md={6} lg={6}>
                        <Box sx={(theme) => ({
                            // background: "#09a2e4",
                            backgroundImage: `url(${vctr})`,
                        })}>
                            <Box sx={(theme) => ({
                                backgroundImage: `url(${sp})`,
                                height: "100vh",
                                width: "100%",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                // backgroundSize: "cover"
                                backgroundSize: "contain"
                            })}>
                                <Box>
                                    <Box sx={() => ({ height: "20vh", })}>
                                        <Box sx={() => ({ display: "flex", justifyContent: "space-around" })}>


                                            <Box sx={() => ({ padding: "3%" })}>

                                                <Image
                                                    src={star}
                                                    alt="Norway"
                                                />

                                            </Box>
                                            <Box sx={() => ({ padding: "3%" })}>

                                                <Image
                                                    src={star}
                                                    alt="Norway"
                                                />

                                            </Box>
                                        </Box>

                                        <Box px="sm" sx={{ display: "flex", justifyContent: "space-between" }}>
                                            <Box sx={{ width: "50px", height: "50px" }}>
                                                <Image
                                                    src={star}
                                                    alt="Star"
                                                />
                                            </Box>
                                            <Box sx={{ width: "50px", height: "50px" }} >
                                                <Image
                                                    src={star}
                                                    alt="Star"
                                                />
                                            </Box>
                                        </Box>

                                    </Box>



                                    <Box sx={{ height: "60vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <Box px="xl" sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                                            <Box sx={{ width: "50px", height: "50px" }}>
                                                <Image
                                                    src={star}
                                                    alt="Star"
                                                />
                                            </Box>
                                            <Box sx={{ width: "50px", height: "50px" }}>
                                                <Image
                                                    src={star}
                                                    alt="Star"
                                                />
                                            </Box>
                                        </Box>
                                    </Box>

                                    <Box sx={() => ({ height: "60vh", })}>
                                        <Box sx={() => ({ display: "flex", justifyContent: "space-around" })}>


                                            <Box sx={() => ({ padding: "3%" })}>

                                                <Image
                                                    src={star}
                                                    alt="Norway"
                                                />

                                            </Box>
                                            <Box sx={() => ({ padding: "3%" })}>

                                                <Image
                                                    src={star}
                                                    alt="Norway"
                                                />

                                            </Box>
                                        </Box>

                                        <Box px="sm" sx={{ display: "flex", justifyContent: "space-between" }}>
                                            <Box sx={{ width: "50px", height: "50px" }}>
                                                <Image
                                                    src={star}
                                                    alt="Star"
                                                />
                                            </Box>
                                            <Box sx={{ width: "50px", height: "50px" }} >
                                                <Image
                                                    src={star}
                                                    alt="Star"
                                                />
                                            </Box>
                                        </Box>

                                    </Box>



                                </Box>


                            </Box>
                        </Box>
                    </Grid.Col>
                </Grid>
                <Box sx={() => ({
                    backgroundSize: "cover",
                    height: "100vh",
                    width: "100vw",
                    backgroundRepeat: "no-repeat",
                    display: "none",
                    backgroundImage: `url(${log})`,
                    "@media(max-width:768px)": {
                        display: "block"
                    }

                })}>
                    <Box sx={() => ({ width: "100vw", height: '15vh', })}></Box>
                    <Box mt="lg" mx="auto" component="form"
                        onSubmit={handleSubmit}
                        sx={(theme) => ({ width: "90%", height: "100%", })}>
                        <Grid>
                            <Grid.Col>
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
                                        <Center 
                                            sx={(theme) => ({ color: "#f2ff1c", fontSize: "20px" })} >
                                            <Text>Log In With Password </Text>
                                        </Center>
                                    </Box>
                                </Center>
                                <TextInput
                                    name='password'
                                    value={phone}
                                    onChange={handleMobileNumberChange}
                                    color='black'
                                    placeholder="Mobile"
                                    pattern="[0-9]{10}"
                                    size="md"
                                    styles={{
                                        error: {
                                            color: 'pink',
                                        }
                                    }} />
                                {mobileError && <Text style={{ color: "red" }}>{mobileError}</Text>}
                            </Grid.Col>
                            <Grid.Col >
                                <TextInput
                                    name='password'
                                    value={password}
                                    onChange={handlePasswordChange}
                                    size="md" placeholder="Password"
                                    type={showPassword ? 'text' : 'password'}
                                    styles={{
                                        error: {
                                            color: 'pink',
                                        }
                                    }}
                                    rightSection={
                                        <ActionIcon onClick={toggleShowPassword} style={{ fontSize: "24px" }}>
                                            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                                        </ActionIcon>
                                    } />
                                {passwordError && <Text style={{ color: "red" }}>{passwordError}</Text>}
                            </Grid.Col>
                        </Grid>
                        <Center >
                            <Box>
                                <Anchor onClick={forgetPassword} sx={(theme) => ({
                                    color: "#f2ff1c",
                                    fontSize: "20px"
                                })}>
                                    Forget Password
                                </Anchor>
                            </Box>
                        </Center>
                        <Center mt="md" mb={10}>
                            <Box>
                                <Button radius="md" size='lg' type='submit' color="pink" px={50}>Submit</Button>
                            </Box>
                        </Center>

                    </Box>

                </Box>


            </Box >
        </>
    )
}
