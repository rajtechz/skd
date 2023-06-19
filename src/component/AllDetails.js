import { Box,  Tabs } from '@mantine/core';
import AttendeeList from './AttendeeList';
import Awardees from './Awardees';
import Guest from './Guest';
import CheckedIn from './CheckedIn';
import NotArrived from './NotArrived';

export default function AllDetails() {
    return (
        <Tabs defaultValue="attendeelist" variant="outline" >
            <Box sx={() => ({ background: "#09a2e5", width: "100vw", zIndex: 2 })} py={15}>
                <Tabs.List sx={() => ({ justifyContent: "center" })}>




                    <Tabs.Tab value="attendeelist" sx={() => ({ cursor: "pointer", })}>Total</Tabs.Tab>
                    <Tabs.Tab value="awardee" sx={{ cursor: "pointer", }}>Awardee</Tabs.Tab>
                    <Tabs.Tab value="guest" sx={() => ({ cursor: "pointer", })}>Gurst</Tabs.Tab>
                    <Tabs.Tab value="checkedin" sx={() => ({ cursor: "pointer", })} >CheckedIn</Tabs.Tab>
                    <Tabs.Tab value="notarrivd" sx={() => ({ cursor: "pointer", })}>NotArrivd</Tabs.Tab>


                </Tabs.List>
            </Box>
            <Tabs.Panel value="attendeelist"  >
                <AttendeeList />
            </Tabs.Panel>
            <Tabs.Panel value="awardee" >
                <Awardees />
            </Tabs.Panel>
            <Tabs.Panel value="guest" >
                <Guest />
            </Tabs.Panel>
            <Tabs.Panel value="checkedin" >
                <CheckedIn />
            </Tabs.Panel>
            <Tabs.Panel value="notarrivd" >
                <NotArrived />
            </Tabs.Panel>
        </Tabs>
    );
}