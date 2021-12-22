import { createStackNavigator } from "react-navigation-stack";
import { HomeScreen, SecondScreen, ThirdScreen } from './screens/index';
import { createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator(
    {
        HomeScreen,
        SecondScreen,
        ThirdScreen
    },
    {
        initialRouteName: 'HomeScreen',
        headerMode: 'none'
    }
)

export default createAppContainer(AppNavigator)