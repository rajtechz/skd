import React, { useEffect, useState } from 'react'
import { Box, Button, Card, Center, Container, Divider, Grid, Text, Loader } from '@mantine/core'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLocation, useNavigate } from 'react-router-dom';


export default function GuestDetail() {
    const navigate = useNavigate()
    const [checkInStatus, setCheckInStatus] = useState()
    const [loading, setLoading] = useState(true)

    const { state } = useLocation();
    const { attendeeId } = state;
    console.log(attendeeId)
    const [guestDetail, setGuestDetail] = useState("")
    const atendeesUrl = `https://eventstaging.skoodos.com/api/1/attendes/${attendeeId}`;

    console.log(atendeesUrl)




    useEffect(() => {
        const fetchData = async () => {
            let token = await AsyncStorage.getItem('token');
            console.log(token)
            try {
                const response = await axios.post(atendeesUrl, {
                }, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Authorization': `Bearer ${token}`,
                    }
                });
                console.log(response?.data)
                setLoading(false)
                // console.log(response.data.message)
                setGuestDetail(response?.data)
                console.log(guestDetail?.data?.attendee?.status)
                setCheckInStatus(guestDetail?.data?.attendee?.status)
                console.log(guestDetail?.data?.attendee?.tickettype?.name)

                // if (response?.data?.data?.attendee?.status === 1) {
                //     setGuestDetail("Yes")
                // }
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return <Center>
            <Loader color="red" variant="bars" sx={(theme) => ({
                height: "100vh",
            })} />
        </Center>
    }
    const goBack = () => {
        navigate(-1)
    }
    return (
        <>

            <Box sx={(theme) => ({ background: "#09a2e5", width: "100vw", paddingBottom: 100 })}>
                <Container pt="lg" width="40%" sx={(theme) => ({ height: "100%", width: "100%", "@media(max-width :768px)": { width: "90%", } })} >
                    <Button color='pink' size='md' radius="md" onClick={goBack}>
                        <Text>Back</Text>
                    </Button>
                    <Center >
                        <Box>
                            <Center>
                                <Text sx={(theme) => ({ color: "#fff", fontSize: "25px", fontWeight: 700, textTransform: "uppercase" })}                            >
                                    {guestDetail?.message}
                                </Text>
                            </Center>
                            <Center>
                                <Text sx={(theme) => ({ color: "#f2ff1c", fontSize: "20px", fontWeight: 700, textTransform: "uppercase" })}>
                                    {guestDetail?.data?.attendee?.name}
                                </Text>
                            </Center>
                            <Box mt="lg">
                                <Center >
                                    <Button size='md' px={50} mr={15} radius={50} color='green' style={{ border: "1px solid #fff" }}>Awardee</Button>
                                    <Button size='md' px={50} ml={15} radius={50} color='green' style={{ border: "1px solid #fff" }}>Student</Button>
                                </Center>
                            </Box>
                        </Box>
                    </Center>
                    <Card shadow="sm" padding="lg" radius="md" withBorder mt={50}>
                        <Box maw="90%" mx="auto">
                            <Center mt={50}>
                                <Text sx={(theme) => ({ color: "#d31360", fontSize: "25px", fontWeight: 700, textTransform: "uppercase" })}>
                                    {guestDetail?.message}
                                </Text>

                            </Center>
                            <Center>

                                <Text sx={(theme) => ({ color: "#09a2e5", fontSize: "16px", fontWeight: 700 })}> PLAY GROUP</Text>


                            </Center>
                            <Box mt={25}>

                                <Divider my="sm" color='gray' variant="dashed" size="sm" />
                            </Box>
                            <Grid>
                                <Grid.Col md={6} lg={6} sm={6} xl={6} xs={6}>
                                    <Box mt={50}>


                                        <Text sx={(theme) => ({ color: "gray", fontSize: "20px", })}> School Name  </Text>
                                        <Text sx={(theme) => ({ fontSize: "20px", fontWeight: "bold" })}>
                                            {guestDetail?.data?.attendee?.school_name}

                                        </Text>
                                    </Box>
                                    <Box mt={50}>
                                        <Text sx={(theme) => ({ color: "gray", fontSize: "20px", })}> Phone</Text>
                                        <Text sx={(theme) => ({ fontSize: "20px", fontWeight: "bold" })}                             >

                                            {guestDetail?.data?.attendee?.phone}
                                        </Text>
                                    </Box>
                                    <Box mt={50}>
                                        <Text sx={(theme) => ({ color: "gray", fontSize: "20px", })}>Guest Ticket</Text>
                                        <Text sx={(theme) => ({ fontSize: "20px", fontWeight: "bold" })}>{guestDetail?.data?.attendee?.tickettype?.name}</Text>
                                    </Box>
                                </Grid.Col>
                                <Grid.Col xs={6} md={6} lg={6} sm={6} xl={6}>
                                    <Box mt={50}>


                                        <Text sx={(theme) => ({ color: "gray", fontSize: "20px", })}> Email </Text>
                                        <Text sx={(theme) => ({ fontSize: "20px", fontWeight: "bold" })}>

                                            {guestDetail?.data?.attendee?.email}

                                        </Text>
                                    </Box>
                                    <Box mt={50}>


                                        <Text sx={(theme) => ({ color: "gray", fontSize: "20px", })}> # of Guest </Text>
                                        <Text sx={(theme) => ({ color: "#d31360", fontSize: "20px", fontWeight: "bold" })}>

                                            {guestDetail?.data?.attendee?.status}


                                        </Text>
                                    </Box>
                                    <Box mt={50} mb={50}>


                                        <Text sx={(theme) => ({ color: "gray", fontSize: "20px", })}> Check-In</Text>
                                        <Text sx={(theme) => ({ color: "#1fb441", fontSize: "20px", fontWeight: "bold" })}>{checkInStatus === 1 ? <span style={{ color: "green" }}> Yes </span> : <span style={{ color: "red" }}>No</span>} </Text>
                                    </Box>
                                </Grid.Col>

                            </Grid>
                        </Box>
                    </Card>

                    <Center mt="lg">
                        <Button color='pink' size='lg' radius="md">

                            <Text color='#fff' size={18}>Check-In</Text>
                        </Button>
                    </Center>
                </Container>

            </Box >

        </>
    )
}
