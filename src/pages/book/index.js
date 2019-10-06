import React from "react";
import { useState } from "react";
import { Alert } from "react-native";
import { Container, Form, Label, Input, Button, ButtonLabel } from "./style";

// Services imports
import api from "./../../services/api";
import { Keys } from "./../../services/database";
import database from "./../../services/database";

export default function Book({ navigation })
{
    const [date, setDate] = useState("");
    const id = navigation.getParam("id");

    async function handleSubmit()
    {
        const user = await database.get(Keys.user);

        await api.post(`/spots/${id}/bookings`, { date },
        { 
            headers: { user_id: user._id}
        });

        Alert.alert("Booking request was sent.")
        navigation.navigate("Main"); 
    }

    function handleCancel()
    {
        navigation.navigate("Main");
    }

    return (
        <Container>
            <Form>
                <Label>DATE OF INTEREST</Label>
                <Input
                    autoCapitalize="words"
                    onChangeText={text => setDate(text)}
                    placeholder="Which date do you wanna booking?"
                />

                <Button onPress={() => handleSubmit()}>
                    <ButtonLabel>Request booking</ButtonLabel>
                </Button>

                <Button cancel onPress={() => handleCancel()}>
                    <ButtonLabel>Cancel</ButtonLabel>
                </Button>

            </Form>
        </Container>
    );
}
