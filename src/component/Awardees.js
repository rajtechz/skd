import React, { useEffect, useState } from 'react'
import { ActionIcon, Avatar, Box, Button, Center, Container, Divider, Flex, Group, Loader, Text, TextInput } from '@mantine/core'
import { BsFillCalendar2DateFill, BsSearch } from "react-icons/bs"
import { IoReloadOutline } from "react-icons/io5"

import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigate } from 'react-router-dom'
import { Calendar } from '@mantine/dates';
export default function Awardees() {
    const urlGuestList = "https://eventstaging.skoodos.com/api/1/guest-list"
    const [attendancelist, setAttendanceList] = useState([])
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()
    const [value, setValue] = useState(false);
    // console.log(value)

    useEffect(() => {
        const fetchData = async () => {
            let token = await AsyncStorage.getItem('token');
            // console.log(token)
            try {
                const response = await axios.post(urlGuestList, {
                }, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Authorization': `Bearer ${token}`,
                    }
                });
                // console.log(response)
                setAttendanceList(response?.data)
                setLoading(false)
                // console.log(response?.data?.data?.attendees[0]?.id)
                console.log(response?.data?.data?.attendees[0]?.guesttype?.title)
                console.log(attendancelist?.data?.attendees[0].type)

                // setConfirmMessage(response?.data)
                // console.log(attendancelist?.data?.attendees[0]?.id)
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);
    const referesh = () => {
        window.location.reload()
    }
    if (loading) {
        return <Center>
            <Loader color="red" variant="bars" sx={(theme) => ({
                height: "100vh",
            })} />
        </Center>
    }
    return (
        <>
            <Box sx={(theme) => ({ background: "#09a2e5", })}>
                <Container sx={(theme) => ({ background: "#09a2e5", padding: 10, })} >
                    <Box >
                        <TextInput icon={<BsSearch size={15} />} name='Serach ' color='black' placeholder=' Search By / Name / Phone / ID' size="md" />
                        <Center >
                            <Center mt="xl">
                                <Box>
                                    <Button radius="md" size='md' type='submit' color="pink" px={30}>Search</Button>
                                </Box>
                            </Center>
                        </Center>
                    </Box>
                    <Box shadow="sm" m="md"  >
                        <Center> <Box>
                                <Text sx={(theme) => ({ fontSize: "30px", color: "#fff", fontWeight: "bolder", textTransform: "uppercase", justifyContent: "center", "@media(max-width :768px)": { fontSize: "18px", marginLeft: 10 } })}>
                                    {attendancelist?.message}
                                </Text>
                            </Box></Center>
                        {/* <Flex sx={() => ({ justifyContent: "space-between", })} >
                            <ActionIcon variant="transparent" onClick={() => { setValue(!value) }} >
                                <BsFillCalendar2DateFill color={"#ffffff"} style={{ fontSize: '50px' }} />
                            </ActionIcon>
                            {value && <Group sx={(theme) => ({ background: "#087F5B", zIndex: 3, position: 'absolute', marginTop: "50px", })}><Calendar /></Group>}
                           
                            <Box>
                                <IoReloadOutline onClick={referesh} size={window.innerWidth <= 768 ? 30 : 30} color="#fff" style={{ fontSize: window.innerWidth <= 768 ? '20px' : '20px' }} />
                            </Box>
                        </Flex> */}
                        <Center>
                            <Text sx={(theme) => ({ fontSize: "18px", color: "#f2ff1c", fontWeight: "bold" })}> Twinkle Twinkle | Delhi | Session 1 </Text>
                        </Center>
                    </Box>
                    <Box sx={(theme) => ({ background: "#fff", padding: 20, })}>
                        {attendancelist?.data?.attendees?.map((item, index) => {
                            return (
                                <Box key={index} onClick={() => navigate("/guestdetail", { state: { attendeeId: item.id } })} sx={(theme) => ({ cursor: "pointer", })} >
                                    <Flex gap={10} sx={() => ({ "@media(max-width:374px)": { flexDirection: "row" } })}>

                                        <Box p={1} type={item?.type} sx={(theme) => ({ background: item?.type === 2 ? "#581845" : "#1db440", borderRadius: "20px", color: "#fff", fontSize: "18px", fontWeight: "bold" })}><Text mx={10} sx={(theme) => ({ textAlign: "center", })}>{item.type === 2 ? <span>Awardee</span> : <span>Sponser</span>}</Text></Box>
                                        <Box p={1} sx={(theme) => ({ background: item?.type === 2 ? "#e98400" : "#1db440", borderRadius: "20px", color: "#fff", fontSize: "18px", fontWeight: "bold" })}><Text mx={10} sx={(theme) => ({ textAlign: "center" })}> {item.type === 2 ? <span>Student</span> : <span>Management</span>}</Text></Box>
                                        <Box p={1} sx={(theme) => ({ background: "red", borderRadius: "50px", color: "#fff", fontSize: "18px", fontWeight: "bold" })}><Text mx={10} sx={(theme) => ({ textAlign: "center" })}>{item.type}</Text></Box>
                                    </Flex>
                                    <Box mt={20}>
                                        <Box sx={() => ({ width: "100%", display: 'flex', justifyContent: "space-between" })}>
                                            <Box sx={() => ({ width: "50%" })}>


                                                <Box md={6} sm={6}>
                                                    <Box>
                                                        <Text sx={(theme) => ({ color: "#09a2e5", fontSize: "18px", fontWeight: "bold" })}>
                                                            {item?.name}
                                                        </Text>
                                                    </Box>
                                                    <Box>
                                                        <Text sx={(theme) => ({ fontSize: "18px", })}>

                                                            {item?.email}

                                                        </Text>
                                                    </Box>
                                                    <Box>
                                                        <Text sx={(theme) => ({ fontSize: "18px", })}>

                                                            {item?.phone}

                                                        </Text>
                                                    </Box>

                                                </Box>

                                            </Box>



                                            <Box sx={() => ({ width: "50%", display: "flex", justifyContent: "flex-end", alignItems: "center" })}>
                                                
                                                <Box>

                                                    <Avatar radius={100} size={60} />
                                                    <Text sx={(theme) => ({ fontSize: "18px", fontWeight: "bold", })}>
                                                        Check-In <br />
                                                        {item.status === 1 ? (
                                                            <Center>

                                                                <span style={{ color: "green" }}>Yes</span>
                                                            </Center>
                                                        ) : (
                                                            <Center>

                                                                <span style={{ color: "red" }}>No</span>
                                                            </Center>
                                                        )}
                                                    </Text>
                                                </Box>
                                            </Box>

                                        </Box>
                                        <Divider my="lg" color='#09a2e5' />
                                    </Box>
                                </Box>
                            )
                        })
                        }
                    </Box>
                </Container>
            </Box >







        </>
    )
}
