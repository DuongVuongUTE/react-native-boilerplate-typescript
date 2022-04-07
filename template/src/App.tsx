import '@i18n';
import MainContainer from '@navigation';
import {persistor, store} from '@store';
import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide({fade: true});
    }, 300);
  }, []);

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainContainer />
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;
