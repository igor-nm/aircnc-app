import styled from "styled-components/native";

export const Container = styled.KeyboardAvoidingView.attrs(props => ({
    behavior: "padding"
}))`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Form = styled.View`
    margin-top: 30px;
    padding: 0px 30px;
    align-self: stretch;
`;

export const Image = styled.Image``;

export const Label = styled.Text`
    color: #444;
    margin-bottom: 8;
    font-weight: bold;
`;

export const Input = styled.TextInput.attrs(props => ({
    autoCorrect: false,
    placeholderTextColor: "#999"
}))`
    color: #444;
    height: 44px;
    font-size: 16px;
    padding: 0px 20px;
    border-radius: 2px;
    margin-bottom: 10px;
    border: 1px solid #DDD;
`;

export const Button = styled.TouchableOpacity`
    height: 42px;
    border-radius: 2px;
    align-items: center;
    justify-content: center;
    background-color: #F05A5B;
`;

export const ButtonLabel = styled.Text`
    color: #FFF;
    font-size: 16px;
    font-weight: bold;
`;
