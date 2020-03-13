import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        headerMode="screen"
        screenOptions={{
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
          headerTintColor: '#FFF',
          headerStyle: { backgroundColor: '#7159c1' },
        }}
      >
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ title: 'Usuários' }}
        />
        <Stack.Screen
          name="User"
          component={User}
          options={User.navigationOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
