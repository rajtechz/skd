import { Anchor, Box, Button, Center, TextInput, Text } from '@mantine/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useState } from 'react';


const url = "https://eventstaging.skoodos.com/api/forget"
export default function ForgetPassword({ setToken }) {
    const [phone, setPhone] = useState('');
    const [phoneErrors, setPhoneErrors] = useState("");

    const handleMobileNumberChange = (e) => {
        setPhone(e.target.value)

    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        setPhoneErrors('');

        const mobileRegex = /^\d{10}$/;
        if (!phone.match(mobileRegex)) {
            setPhoneErrors('Invalid mobile number format.');
        }


        const fetchData = async () => {
            let token = await AsyncStorage.getItem('token');
            console.log(token)
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
                console.log(response?.data)
                // console.log(response?.data?.data?.attendees[0].status)
                // setAttendanceList(response?.data)
                // setConfirmMessage(response?.data)
                // console.log(attendancelist.success)



            } catch (error) {
                console.error(error);
            }
        };
        fetchData();



    }
    const loginWithPassword = () => {
        window.location.href = "/";
    }
    return (
        <>
            <Box sx={(theme) => ({
                //  background:"#d0f23d",
                overflow: "hidden",
                height: "100vh",
                width: "100vw"
            })}>
                <Box
                    sx={(theme) => ({
                        height: "100vh",
                        width: "100vw",
                        position: "relative",
                    })}>
                    <Box
                        sx={(theme) => ({
                            borderRadius: "10px",
                            background: "#09a2e5",
                            height: "80vh",
                            width: "30vw",
                            position: "absolute",
                            left: "50%",
                            top: "50%",
                            transform: "translate(-50%, -50%)",
                            "@media(max-width : 768px)": {
                                width: "100vw",
                                height: "100vh",
                                background: "#09a2e5"
                            }
                        })} >
                        <Center mt="80px">
                            <Box>
                                <Center mb={25}>
                                    <Text sx={(theme) => ({
                                        fontSize: "80px",
                                        fontWeight: "bolder"
                                    })}> <span >𝘴𝓴</span> <span style={{ color: "#f2ff1c" }}>ₒₒ</span><span>𝚍ₒ𝘴</span></Text>

                                </Center>
                                <Center>
                                    <Text sx={(theme) => ({
                                        color: "#fff",
                                        fontSize: "20px"
                                    })}>
                                        Forget  <span > <b> Password ? </b></span>

                                    </Text>
                                </Center>
                                <Center>
                                    <Box>
                                    </Box>
                                </Center>
                                <Center mt="xs"

                                    sx={(theme) => ({
                                        color: "#f2ff1c",
                                        fontSize: "20px"
                                    })} >
                                    <Text>Please Enter Your Mobile Number</Text>
                                </Center>
                            </Box>
                        </Center>
                        <Box mt="50px" mx="auto" component="form"
                            onSubmit={handleSubmit}
                            sx={(theme) => ({
                                width: "90%",
                                height: "100%",
                            })}>
                            <TextInput color='black' size='lg'
                                placeholder="Mobile"
                                value={phone}
                                onChange={handleMobileNumberChange}
                                pattern="[0-9]{10}"
                                styles={{ error: { color: "#fff", } }} />
                            <Text >
                                {phoneErrors && <Text style={{ color: "red" }}>{phoneErrors}</Text>}
                            </Text>
                            <Center mt="50px">
                                <Box>

                                    <Button radius="md" size='lg' type='submit' color="pink" px={50}>
                                        Submit
                                    </Button>
                                </Box>

                            </Center>
                            <Center mt="40px">
                                <Box>

                                    <Anchor onClick={loginWithPassword} sx={(theme) => ({
                                        color: "#f2ff1c",
                                        fontSize: "20px"
                                    })}>
                                        Log In With Password
                                    </Anchor>
                                </Box>
                            </Center>
                        </Box>
                    </Box>
                </Box>

            </Box>




        </>
    )
}
