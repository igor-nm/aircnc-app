import { FlatList } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
    margin-top: 20px;
`;

export const Title = styled.Text`
    color: #444;
    font-size: 20px;
    padding: 0px 20px;
    margin-bottom: 15px;
`;

export const Bold = styled.Text`
    font-weight: bold;
`;

export const Spot = styled.View`
    margin-right: 15px;
`;

export const Thumbnail = styled.Image`
    width: 200px;
    height: 120px;
    border-radius: 2px;
    resize-mode: cover
`;

export const Company = styled.Text`
    color: #333;
    font-size: 24px;
    margin-top: 10px;
    font-weight: bold;
`;

export const Price = styled.Text`
    color: #999;
    font-size: 15px;
    margin-top: 5px;
`;

export const Button = styled.TouchableOpacity`
    height: 32px;
    margin-top: 10px;
    border-radius: 2px;
    align-items: center;
    justify-content: center;
    background-color: #F05A5B;
`;

export const ButtonText = styled.Text`
    color: #FFF;
    font-size: 16px;
    font-weight: bold;
`;

export const List = styled(FlatList).attrs(props => ({
    horizontal: true,
    showsHorizontalScrollIndicator: false
}))`
    padding: 0px 20px; 
`;
