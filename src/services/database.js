import { AsyncStorage } from "react-native";

export async function save(key, data)
{
    try 
    {
        const saved = await AsyncStorage.setItem(key, JSON.stringify(data));
        return saved;
    }
    catch(exception)
    {
        console.log(exception);
        return "error";      
    }
}

export async function get(key)
{
    try 
    {
        const data = await AsyncStorage.getItem(key);
        return JSON.parse(data);
    }
    catch(exception)
    {
        console.log(exception);
        return "error";
    }
}

const Keys =
{
    user: "@user:key",
    techs: "@techs:key"
}

export { Keys };
export default {
    get,
    save
};