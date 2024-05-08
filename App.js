import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer} from '@react-navigation/native'



import LoginScreen from './app/screens/LoginScreen';
import CourseCatalogue from './app/screens/CourseCatalogue';
import Leaderboard from './app/screens/Leaderboard';
import MyRewards from './app/screens/MyRewards';
import MyProfile from './app/screens/MyProfile';


const Tab = createBottomTabNavigator()

export default function App() {

  return <LoginScreen />;
}