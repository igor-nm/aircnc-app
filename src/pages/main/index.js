import React from "react";
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
