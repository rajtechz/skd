import { Box, Button, Card, Center, Container, Divider, Grid, Loader, Text, TextInput } from '@mantine/core'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';

// const passwordReset = "https://eventstaging.skoodos.com/api/1/guest-list"


export default function AllSettings() {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)

    //   const fetchData = async () => {
    //       let token = await AsyncStorage.getItem('token');
    //       console.log(token)
    //       try {
    //           const response = await axios.post(passwordReset, {
    //           }, {
    //               headers: {
    //                   'Accept': 'application/json',
    //                   'Content-Type': 'application/json',
    //                   'Access-Control-Allow-Origin': '*',
    //                   'Authorization': `Bearer ${token}`,
    //               }
    //           });
    //           console.log(response.data)
    //         console.log(response.data.message)
    //       } catch (error) {
    //           console.error(error);
    //       }
    //   };
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])
    if (loading) {
        return <Center>
            <Loader color="red" variant="bars" sx={(theme) => ({ height: "100vh", })} />
        </Center>
    }
    const goBack = () => {
        navigate(-1)
    }
    return (
        <>
            <Box sx={(theme) => ({ background: "#09a2e5", width: "100vw", paddingBottom: 100 })}>

                <Container pt="lg" width="40%" sx={(theme) => ({ height: "100%", width: "100%", "@media(max-width :768px)": { width: "90%", } })} >
                    <Button color='pink' mb={20} size='md' radius="md" onClick={goBack}>
                        <Text>Back</Text>
                    </Button>
                    <Center mt={50}>
                        <Box>
                            <Center>
                                <Text sx={(theme) => ({ color: "#fff", fontSize: "25px", fontWeight: 700 })}                            >
                                    ATTENDEE DETAILS
                                </Text>
                            </Center>
                            <Center>
                                <Text sx={(theme) => ({ color: "#f2ff1c", fontSize: "20px", fontWeight: 700 })}>
                                    RAJESH KUMAR
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
                                <Text sx={(theme) => ({ color: "#d31360", fontSize: "25px", fontWeight: 700 })}     > EVENT DETAILS
                                </Text>
                            </Center>
                            <Center>
                                <Text sx={(theme) => ({ color: "#09a2e5", fontSize: "16px", fontWeight: 700 })}                               > PLAY GROUP</Text>
                            </Center>
                            <Box mt={25}>
                                <Divider my="sm" color='gray' variant="dashed" size="sm" />
                            </Box>
                            <Grid>
                                <Grid.Col md={6} lg={6} sm={6} xl={6} xs={6}>
                                    <Box mt={50}>
                                        <Text sx={(theme) => ({ color: "gray", fontSize: "20px", })}> School Name  </Text>
                                        <Text sx={(theme) => ({ fontSize: "20px", fontWeight: "bold" })}> Happy Model School</Text>
                                    </Box>
                                    <Box mt={50}>
                                        <Text sx={(theme) => ({ color: "gray", fontSize: "20px", })}> Phone</Text>
                                        <Text sx={(theme) => ({ fontSize: "20px", fontWeight: "bold" })}> 9876543210</Text>
                                    </Box>
                                    <Box mt={50}>
                                        <Text sx={(theme) => ({ color: "gray", fontSize: "20px", })}>Guest Ticket</Text>
                                        <Text sx={(theme) => ({ fontSize: "20px", fontWeight: "bold" })}>VVIP : <span style={{ color: "#d31360" }}>FREE</span> </Text>
                                    </Box>
                                </Grid.Col>
                                <Grid.Col xs={6} md={6} lg={6} sm={6} xl={6}>
                                    <Box mt={50}>
                                        <Text sx={(theme) => ({ color: "gray", fontSize: "20px", })} > Email </Text>
                                        <Text sx={(theme) => ({ fontSize: "20px", fontWeight: "bold" })}>hiitechz07@gmail.com</Text>
                                    </Box>
                                    <Box mt={50}>
                                        <Text sx={(theme) => ({ color: "gray", })}> # of Guest </Text>
                                        <Text sx={(theme) => ({ color: "#d31360", fontSize: "20px", fontWeight: "bold" })} >4</Text>
                                    </Box>
                                    <Box mt={50} mb={50}>
                                        <Text sx={(theme) => ({ color: "gray", fontSize: "20px", })}                      > Check-In</Text>
                                        <Text sx={(theme) => ({ color: "#1fb441", fontSize: "20px", fontWeight: "bold" })}     >Yes</Text>
                                    </Box>
                                </Grid.Col>
                            </Grid>
                        </Box>
                    </Card>
                    <Card shadow="sm" padding="lg" radius="md" withBorder mt={50}>
                        <Box maw="90%" mx="auto">
                            <Center mt={50}>
                                <Text sx={(theme) => ({ color: "#d31360", fontSize: "25px", fontWeight: 700 })}              > USER DETAILS                                </Text>
                            </Center>
                            <Center>
                                <Text sx={(theme) => ({ color: "#09a2e5", fontSize: "16px", fontWeight: 700 })}   > PLAY GROUP</Text>                          </Center>
                            <Box mt={25}>
                                <Divider my="sm" color='gray' variant="dashed" size="sm" />
                            </Box>
                            <Grid>
                                <Grid.Col md={6} lg={6} sm={6} xl={6} xs={6}>
                                    <Box mt={50}>                                        <Text sx={(theme) => ({ color: "gray", fontSize: "20px", })} > School Name  </Text>
                                        <Text sx={(theme) => ({ fontSize: "20px", fontWeight: "bold" })}     > Happy Model School</Text>
                                    </Box>
                                    <Box mt={50}>
                                        <Text sx={(theme) => ({ color: "gray", fontSize: "20px", })}> Phone</Text>
                                        <Text sx={(theme) => ({ fontSize: "20px", fontWeight: "bold" })}> 9876543210</Text>
                                    </Box>
                                    <Box mt={50}>
                                        <Text sx={(theme) => ({ color: "gray", fontSize: "20px", })}>Guest Ticket</Text>
                                        <Text sx={(theme) => ({ fontSize: "20px", fontWeight: "bold" })}>VVIP : <span style={{ color: "#d31360" }}>FREE</span> </Text>
                                    </Box>
                                </Grid.Col>
                                <Grid.Col xs={6} md={6} lg={6} sm={6} xl={6}>
                                    <Box mt={50}>
                                        <Text sx={(theme) => ({ color: "gray", fontSize: "20px", })}     > Email </Text>
                                        <Text sx={(theme) => ({ fontSize: "20px", fontWeight: "bold" })}>hiitechz07@gmail.com</Text>
                                    </Box>
                                    <Box mt={50}>
                                        <Text sx={(theme) => ({ color: "gray", fontSize: "20px", })}> # of Guest </Text>
                                        <Text sx={(theme) => ({ color: "#d31360", fontSize: "20px", fontWeight: "bold" })}>4</Text>
                                    </Box>
                                    <Box mt={50} mb={50}>
                                        <Text sx={(theme) => ({ color: "gray", fontSize: "20px", })}> Check-In</Text>
                                        <Text sx={(theme) => ({ color: "#1fb441", fontSize: "20px", fontWeight: "bold" })}>Yes</Text>
                                    </Box>
                                </Grid.Col>

                            </Grid>
                        </Box>
                    </Card>
                    <Card shadow="sm" padding="lg" radius="md" withBorder mt={50}>
                        <Box maw="90%" mx="auto">
                            <Center mt={50}>
                                <Text sx={(theme) => ({ color: "#d31360", fontSize: "25px", fontWeight: 700 })}> APP DETAILS
                                </Text>
                            </Center>
                            <Center>
                                <Text sx={(theme) => ({ color: "#09a2e5", fontSize: "16px", fontWeight: 700 })}
                                > PLAY GROUP</Text>
                            </Center>
                            <Box mt={25}>
                                <Divider my="sm" color='gray' variant="dashed" size="sm" />
                            </Box>
                            <Grid>
                                <Grid.Col md={6} lg={6} sm={6} xl={6} xs={6}>
                                    <Box mt={50}>
                                        <Text sx={(theme) => ({ color: "gray", fontSize: "20px", })}                                        > School Name  </Text>
                                        <Text sx={(theme) => ({
                                            fontSize: "20px", fontWeight: "bold"
                                        })}
                                        > Happy Model School</Text>
                                    </Box>
                                    <Box mt={50}>
                                        <Text
                                            sx={(theme) => ({ color: "gray", fontSize: "20px", })}> Phone</Text>
                                        <Text sx={(theme) => ({ fontSize: "20px", fontWeight: "bold" })}> 9876543210</Text>
                                    </Box>
                                </Grid.Col>
                                <Grid.Col xs={6} md={6} lg={6} sm={6} xl={6}>
                                    <Box mt={50}>
                                        <Text sx={(theme) => ({ color: "gray", fontSize: "20px", })}> Email </Text>
                                        <Text sx={(theme) => ({ fontSize: "20px", fontWeight: "bold" })}>hiitechz07@gmail.com</Text>
                                    </Box>
                                    <Box mt={50}>
                                        <Text sx={(theme) => ({ color: "gray", fontSize: "20px", })}> # of Guest </Text>
                                        <Text sx={(theme) => ({ color: "#d31360", fontSize: "20px", fontWeight: "bold" })}>4</Text>
                                    </Box>
                                </Grid.Col>
                            </Grid>
                        </Box>
                    </Card>
                    <Card shadow="sm" padding="lg" radius="md" withBorder mt={50}>
                        <Box maw="90%" mx="auto">
                            <Center mt={50}>
                                <Text sx={(theme) => ({ color: "#d31360", fontSize: "25px", fontWeight: 700 })}> RESET PASSWORD
                                </Text>
                            </Center>
                            <Center>
                                <Text sx={(theme) => ({ color: "#09a2e5", fontSize: "16px", fontWeight: 700 })}> PLAY GROUP</Text>
                            </Center>
                            <Box mt={25}>
                                <Divider my="sm" color='gray' variant="dashed" size="sm" />
                            </Box>
                            <Box mb={50} mt={50} mx="auto" component="form" sx={(theme) => ({ width: "90%", height: "100%", })}>
                                <Grid>
                                    <Grid.Col>
                                        <TextInput name='Old password' size="lg" placeholder="Old password" styles={{ error: { color: 'pink', } }} />
                                    </Grid.Col>
                                    <Grid.Col pt="xl">
                                        <TextInput name='New password' size="lg" placeholder="New password" styles={{ error: { color: 'pink', } }} />
                                    </Grid.Col>
                                    <Grid.Col pt="xl">
                                        <TextInput name='Confirm password' size="lg" placeholder="Confirm password" styles={{ error: { color: 'pink', } }} />
                                    </Grid.Col>
                                </Grid>
                            </Box>
                        </Box>
                    </Card>
                    <Center mt="lg">
                        <Center mt="xl">
                            <Box>
                                <Button radius="md" size='lg' type='submit' color="pink" px={50}>Submit</Button>
                            </Box>
                        </Center>
                    </Center>
                </Container>

            </Box >


        </>
    )
}
