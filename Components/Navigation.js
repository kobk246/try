import 'react-native-gesture-handler'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Login";
import SignUp from "./SignUp";

 const nav= createStackNavigator();

 export default function Nav(){
    return(
        <NavigationContainer>
            <nav.Navigator screenOptions={{headerShown:false}}>
            <nav.Screen name="SignIn" component={Login}></nav.Screen>
            <nav.Screen name ="SignUp" component={SignUp}></nav.Screen>
            </nav.Navigator>
        </NavigationContainer>
        
    )
 }