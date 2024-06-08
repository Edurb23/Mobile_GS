import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/pages/Login';
import Principal from './src/pages/Principal'
import Conta from './src/pages/Conta'
import Missao from './src/pages/Missao';
import CriarMissao from './src/pages/CriarMissao';
import Lista from './src/pages/Lista';
import listaMissoes from './src/pages/ListasMissoes';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="Home"
          component={Principal}
          options={{ headerShown: false }} 
        />
      <Stack.Screen
          name="Conta"
          component={Conta}
          options={{headerShown: true, title: ''}}  
        />
        <Stack.Screen
          name="Missao"
          component={Missao}
          options={{headerShown: true, title: ''}}  
        />
        <Stack.Screen
          name="CriaMissao"
          component={CriarMissao}
          options={{headerShown: true, title: ''}}  
        />
        <Stack.Screen
          name="Lista"
          component={Lista}
          options={{headerShown: true, title: ''}}  
        />
        <Stack.Screen
          name="ListaMissao"
          component={listaMissoes}
          options={{headerShown: true, title: ''}}  
        />
      </Stack.Navigator>
    
    </NavigationContainer>
  );
}
