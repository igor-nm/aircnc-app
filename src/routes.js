import Book from "./pages/book/index";
import Main from "./pages/main/index";
import Login from "./pages/login/index";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        Main,
        Book
    })
)

export default Routes;
 