import { NavigationContainer } from '@react-navigation/native';
import NavigatorTabBar from './src/navigation/tabbar';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor = "#2E2E2E" style="light" />

      <NavigatorTabBar />
    </NavigationContainer>
  );
}