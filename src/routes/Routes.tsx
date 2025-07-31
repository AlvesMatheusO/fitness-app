import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";

//pages:
import BottomTab from "./BottomTabs";
import SettingsScreen from "../pages/Settings/SettingsScreen";
import DetailsScreen from "../pages/Home/DetailsScreen";

const Stack = createStackNavigator();

const stackScreenOptions: StackNavigationOptions = {
    headerShown: false,
};

export default function Routes() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="BottomTab" screenOptions={stackScreenOptions}>
                <Stack.Screen name="BottomTab" component={BottomTab}/>
                <Stack.Screen name="Settings" component={SettingsScreen} />
                <Stack.Screen name="Details" component={DetailsScreen}  />
            </Stack.Navigator>
        </NavigationContainer>
    )
}