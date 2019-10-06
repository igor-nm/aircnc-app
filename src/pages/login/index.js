// Common imports (like packges)
import React from "react";
import { useState, useEffect } from "react";
import { Container, Button, Image, Label, Input, Form, ButtonLabel } from "./style";

// Services imports
import api from "./../../services/api";
import { Keys } from "./../../services/database";
import database from "./../../services/database";

// Assets imports
import LOGO from "./../../assets/logo.png";

export default function Login({ navigation })
{
    const [email, setEmail] = useState("");
    const [techs, setTechs] = useState("");

    useEffect(() => {
        database.get(Keys.user).then(user => {
            if (user) {
                navigation.navigate("Main");
            }
        });
    }, []);

    async function handleSubmit()
    {
        const { data } = await api.post("/sessions", { email });
        
        database.save(Keys.user, data);
        database.save(Keys.techs, techs);

        navigation.navigate("Main");
    }

    return (
        <Container>
            <Image source={LOGO} />
            <Form>
                <Label>E-MAIL</Label>
                <Input
                    value={email}
                    placeholder="E-mail"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    onChangeText={text => setEmail(text)}
                />
                <Label>TECHNOLOGIES</Label>
                <Input
                    autoCapitalize="words"
                    onChangeText={text => setTechs(text)}
                    placeholder="Technologies of interest"
                />
                <Button onPress={handleSubmit}>
                    <ButtonLabel>Find spots</ButtonLabel>
                </Button>
            </Form>
        </Container>
    )
}
