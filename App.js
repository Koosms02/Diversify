
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './stackNavigation';
import { AuthProvider } from './api/useAuth';


export default function App() {
  return ( 
    <NavigationContainer>
          <AuthProvider>
              <StackNavigation/>
          </AuthProvider>
    </NavigationContainer>
  );
}

