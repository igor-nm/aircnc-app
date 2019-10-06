import React from "react";
import { useState, useEffect } from "react";
import { withNavigation } from "react-navigation";
import { Container, Title, Bold, List, Thumbnail, Company, Spot, Price, Button, ButtonText } from "./style";

// Services imports
import api from "./../../services/api";

function SpotList({ tech, navigation })
{
    const [spots, setSpots] = useState([]);

    useEffect(() => {
        loadSpots();
    }, []);

    async function loadSpots()
    {
        const { data } = await api.get("/spots", { params: { tech } });
        
        setSpots(data);    
    }

    function handleSubmit(id)
    {
        navigation.navigate("Book", { id });
    }

    return (
        <Container>
            <Title>
                Companies that use <Bold>{tech}</Bold>
            </Title>

            <List
                data={spots}
                keyExtractor={spot => spot._id}
                renderItem={({ item }) => (
                    <Spot>
                        <Thumbnail source={{ uri: item.thumbnail_url }} />
                        <Company>{item.company}</Company>
                        <Price>{item.price ? `R$${item.price}/day ` : "FREE"}</Price>

                        <Button onPress={() => handleSubmit(item._id)}>
                            <ButtonText>Resquest booking</ButtonText>
                        </Button>
                    </Spot>
                )}
            />
        </Container>
    );
}

export default withNavigation(SpotList);
