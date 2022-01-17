import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, MaterialIcons } from '@expo/vector-icons'; 
import Carnets from '../pages/Carnets';
import Card from '../pages/Card';

export default function NavigatorTabBar() {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions = {{
                tabBarStyle: {
                    backgroundColor: '#6EBE7B',
                    borderTopColor: 'transparent',
                    paddingBottom: 5,
                    paddingTop: 5
                },

                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: '#2E2E2E'
            }}
        >
            <Tab.Screen name="Carnê" 
             component={Carnets} 
             options={{ 
                headerShown: false,
                tabBarIcon: ({ size, color }) => (
                    <MaterialIcons name="attach-money" size={size} color={color} />
                )
             }}
            />
            <Tab.Screen name="Cartão"
             component={Card} 
             options={{ 
                headerShown: false,
                tabBarIcon: ({ size, color }) => (
                    <AntDesign name="creditcard" size={size} color={color} />
                )
             }}/>
        </Tab.Navigator>
    );
}