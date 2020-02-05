import {createStackNavigator} from "react-navigation-stack";
import {Adverb, CarList} from "../view";
import Login from "../view/Login/Login";
import Registration from "../view/Registration/Registration";

const RootStack = createStackNavigator({
    CarList: {
        screen: CarList,
    }, Adverb: {
        screen: Adverb,
    },
    Login: {
        screen: Login,
    },
    Registration: {
        screen: Registration,
    }
}, {
    initialRouteName: 'Login'
});

export default RootStack;
