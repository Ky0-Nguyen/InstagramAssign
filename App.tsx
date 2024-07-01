/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {PrimaryNavigator} from 'navigation';
import {Provider} from 'react-redux';
import {appStore} from 'stores';

const App = (): React.JSX.Element => {
  return (
    <Provider store={appStore}>
      <NavigationContainer>
        <PrimaryNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
