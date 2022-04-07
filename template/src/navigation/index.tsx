import '@i18n';
import {
  getStartupState,
  incrementByAmount,
  testAction,
} from '@store/slice/startup';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Config from 'react-native-config';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import {useDispatch, useSelector} from 'react-redux';
let count = 0;
const Section: React.FC<{
  title: string;
}> = ({children, title}) => {
  return (
    <View style={styles.sectionContainer}>
      <Text>{title}</Text>
      <Text>{children}</Text>
    </View>
  );
};

const MainContainer = () => {
  const dispatch = useDispatch();
  const random = useSelector(state => getStartupState(state).random);
  const {t} = useTranslation();

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Header />
        <View style={{backgroundColor: Colors.lighter}}>
          <Section title="App Name">{Config.APP_NAME}</Section>
          <Section title="i18n">{t('hello')}</Section>
          <Section title="Count">{random}</Section>
          <Button
            title="Alert"
            onPress={() => {
              dispatch(
                incrementByAmount({
                  isLoading: true,
                  random: count++,
                }),
              );
            }}
          />
          <Button
            title="Alert"
            onPress={() => {
              dispatch(testAction({random: Math.random() + 23}));
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainContainer;

const styles = StyleSheet.create({
  sectionContainer: {
    marginVertical: 24,
    paddingHorizontal: 24,
  },
});
