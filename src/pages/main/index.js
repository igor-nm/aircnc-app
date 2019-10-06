import React from "react";
import { Alert } from "react-native";
import websocket from "socket.io-client";
import { useState, useEffect } from "react";
import { Container, Image, List } from "./style";
import SpotList from "./../../components/spot-list";

// Services imports
import { Keys } from "./../../services/database";
import database from "./../../services/database";

// Assets imports
import LOGO from "./../../assets/logo.png";

export default function Main()
{
    const [techs, setTechs] = useState([]);

    useEffect(() => {
        database.get(Keys.user).then(user =>
            {
                const user_id = user._id;
                const ws = websocket("http://192.168.0.9:3333", { query: { user_id }});

                ws.on("booking_response", booking =>
                {
                    const status = booking.appreved ? "APPROVED" : "REJECTED";
                    Alert.alert(`Your booking at ${booking.spot.company} on ${booking.date} was ${status}`);
                })
            })
    }, []);

    useEffect(() => {
        getTechs();
    }, []);

    async function getTechs()
    {
        const data = await database.get(Keys.techs);        
        const techsList = data.split(",").map(tech => tech.trim());

        setTechs(techsList);
    }

    return (
        <Container>
            <Image source={LOGO} />

            <List>
                {techs.map(tech => <SpotList key={tech} tech={tech} />)}
            </List>
        </Container>
    );
}
